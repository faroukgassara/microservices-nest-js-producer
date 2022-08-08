import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) { }

  // ***************** Create New Applicaton *****************
  async create(createApplicationDto: CreateApplicationDto, pattern: string) {
    return await this.client.send(pattern, createApplicationDto).toPromise();
  }

  // ***************** Find All Applicatons *****************
  async findAll(pattern: string) {
    return await this.client.send(pattern, pattern).toPromise();
  }

  // ***************** Find One Applicaton *****************
  async findOne(pattern: string, id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  // ***************** Update Applicaton *****************
  async update(pattern: string, _id: string, updateApplicationDto: UpdateApplicationDto) {
    return await this.client.send(pattern, updateApplicationDto).toPromise();
  }

  // ***************** Delete Applicaton *****************
  async remove(pattern: string, _id: string) {
    return await this.client.send(pattern, _id).toPromise();
  }

  // ***************** Add Role To Applicaton *****************
  async updatepush(pattern: string, data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Remove Role From Applicaton *****************
  async updatepull(pattern: string, data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

}
