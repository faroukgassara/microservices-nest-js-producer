import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UsePipes, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll('user-findall');
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne('user-findone',email);
  }

  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update('user-update',_id, updateUserDto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.usersService.remove('user-delete',email);
  }

  @Post('/signup')
  signup(@Body() data: CreateUserDto) {
    return this.usersService.signup('user-management',data);
  }

  @Post('/forgotpassword')
  async forgot(@Body('email') email: string) {
    const crypto = require('crypto');
    const token = crypto.randomBytes(10).toString('hex'); 
    const created_at = new Date().getTime();
    return this.usersService.forgot('forgot-password',{
      email,
      token,
      created_at
    });
  }
}
