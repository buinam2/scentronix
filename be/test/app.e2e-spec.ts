import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import fetchMock from 'jest-fetch-mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: AppService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    appService = app.get<AppService>(AppService);
    fetchMock.resetMocks();
  });

  it('/find-server (GET)', async () => {
    jest.spyOn(appService, 'findServer').mockImplementation(async () => ({
      url: 'https://gitlab.com',
      priority: 4,
    }));

    const response = await request(app.getHttpServer())
      .get('/find-server')
      .expect(200);

    expect(response.body).toEqual({
      url: 'https://gitlab.com',
      priority: 4,
    });
  });

  it('/find-server (GET) - No servers online', async () => {
    jest.spyOn(appService, 'findServer').mockImplementation(async () => {
      throw new HttpException('No servers available!', 404);
    });

    const response = await request(app.getHttpServer())
      .get('/find-server')
      .expect(404);

    expect(response.body.message).toBe('No servers available!');
  });

  it('should return the online server with the lowest priority', async () => {
    fetchMock.mockResponses(
      [JSON.stringify({}), { status: 500 }],
      [JSON.stringify({}), { status: 200 }],
      [JSON.stringify({}), { status: 200 }],
      [JSON.stringify({}), { status: 500 }],
    );

    const result = await appService.findServer();
    expect(result).toEqual({
      url: 'https://gitlab.com',
      priority: 4,
    });
  }, 20000);
});
