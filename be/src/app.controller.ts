import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ServerFoundResponse } from './dto/server-found.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find-server')
  async findServer(): Promise<ServerFoundResponse> {
    return this.appService.findServer();
  }
}
