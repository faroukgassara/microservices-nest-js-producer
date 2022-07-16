import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) {} 
  
  async create(createRoleDto: CreateRoleDto,pattern: string) {
    return await this.client.send(pattern,createRoleDto).toPromise();
  }

  async findAll(pattern: string) {
    return await this.client.send(pattern,pattern).toPromise();
  }

  async findOne(pattern: string,id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  async update(pattern: string,_id: string, updateRoleDto: UpdateRoleDto) {
    return await this.client.send(pattern, updateRoleDto).toPromise();
  }

  async remove(pattern: string,id: number) {
    return await this.client.send(pattern, id).toPromise();
  }
}
