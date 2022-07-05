import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) {}

  async findAll(pattern: string) {
    return await this.client.send(pattern,pattern).toPromise();
  }

  async findOne(pattern: string,email: string):Promise<User | undefined> {
    return await this.client.send(pattern, email).toPromise();
  }

  async update(pattern: string,_id: string, updateUserDto: UpdateUserDto) {
    updateUserDto._id = _id;
    return await this.client.send(pattern, updateUserDto).toPromise();
  }

  async remove(pattern: string,email: string) {
    return await this.client.send(pattern, email).toPromise();
  }

  async signup(pattern: string,data: CreateUserDto) {
    return await this.client.send(pattern, data).toPromise();
  }

  async forgot(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  async resetpassword(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }
}
