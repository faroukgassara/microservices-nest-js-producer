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

  // ***************** Find All Users *****************
  async findAll(pattern: string) {
    return await this.client.send(pattern,pattern).toPromise();
  }

  // ***************** Find User By Email *****************
  async findOne(pattern: string,email: string):Promise<User | undefined> {
    return await this.client.send(pattern, email).toPromise();
  }

  // ***************** Update User *****************
  async update(pattern: string,_id: string, updateUserDto: UpdateUserDto) {
    updateUserDto._id = _id;
    return await this.client.send(pattern, updateUserDto).toPromise();
  }

  // ***************** Delete User *****************
  async remove(pattern: string,email: string) {
    return await this.client.send(pattern, email).toPromise();
  }

  // ***************** Sign Up (Create New User) *****************
  async signup(pattern: string,data: CreateUserDto) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Add Forget password Request To The DataBase *****************
  async forgot(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Reset Password *****************
  async resetpassword(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Confirm Account *****************
  async confirmaccount(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Affect Role To User *****************
  async updatepush(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }

  // ***************** Sign In With One Of The Applications*****************
  async signin(pattern: string,data: any) {
    return await this.client.send(pattern, data).toPromise();
  }
}
