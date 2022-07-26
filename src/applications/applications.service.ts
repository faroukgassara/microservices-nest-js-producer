import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) {} 

  async create(createApplicationDto: CreateApplicationDto,pattern: string) {
    return await this.client.send(pattern,createApplicationDto).toPromise();
  }

  async findAll(pattern: string) {
    return await this.client.send(pattern,pattern).toPromise();
  }

  async findOne(pattern: string,id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  async update(pattern: string,_id: string, updateApplicationDto: UpdateApplicationDto) {
    return await this.client.send(pattern, updateApplicationDto).toPromise();
  }

  async remove(pattern: string,_id: string) {
    return await this.client.send(pattern, _id).toPromise();
  }
}
