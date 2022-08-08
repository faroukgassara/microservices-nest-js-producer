import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) { }

  // ***************** Create New Role *****************
  async create(createRoleDto: CreateRoleDto, pattern: string) {
    return await this.client.send(pattern, createRoleDto).toPromise();
  }

  // ***************** Find All Roles *****************
  async findAll(pattern: string) {
    return await this.client.send(pattern, pattern).toPromise();
  }

  // ***************** Find One Role *****************
  async findOne(pattern: string, id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  // ***************** Update Role *****************
  async update(pattern: string, _id: string, updateRoleDto: UpdateRoleDto) {
    return await this.client.send(pattern, updateRoleDto).toPromise();
  }

  // ***************** Remove Role *****************
  async remove(pattern: string, _id: string) {
    return await this.client.send(pattern, _id).toPromise();
  }
}
