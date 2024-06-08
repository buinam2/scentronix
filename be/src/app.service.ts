import { HttpException, Injectable } from '@nestjs/common';
import { ServerFoundResponse } from './dto/server-found.response';
import { ServerObj, servers } from './constants/servers';

@Injectable()
export class AppService {
  async findServer(): Promise<ServerFoundResponse> {
    const serverChecks = servers.map((server) => this.checkServer(server));
    const results = await Promise.all(serverChecks);

    const onlineServers = results.filter((server) => server !== null);

    if (onlineServers.length === 0) {
      throw new HttpException('No servers available!', 404);
    }

    return this.findTheLowestPriorityServer(onlineServers);
  }

  private checkServer = async (server: ServerObj) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 5000);
      const response = await fetch(server.url, { signal: controller.signal });

      clearTimeout(timeoutId);

      if (response.ok) {
        return server;
      }
    } catch (error) {
      if (error?.name === 'AbortError') {
        console.log(server.url, ' is taking too long to respond -> aborted');
        return null;
      } else {
        console.log(server.url, ': ', error?.message);
        return null;
      }
    }
  };

  private findTheLowestPriorityServer = (servers: ServerObj[]) => {
    return servers.reduce((prev, current) =>
      prev.priority > current.priority ? prev : current,
    );
  };
}
