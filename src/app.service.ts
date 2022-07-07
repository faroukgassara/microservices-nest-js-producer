import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) {}

  async login(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }
}
