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

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.usersService.remove('user-delete',_id);
  }

  @Post('/signup')
  signup(@Body() data: CreateUserDto) {
    return this.usersService.signup('user-management',data);
  }

  @Post('/forgotpassword/:email')
  async forgot(@Param('email') email: string) {
    
    const crypto = require('crypto');
    const token = crypto.randomBytes(10).toString('hex'); 
    const created_at = new Date().getTime();
    const confirmed_at = null;

    return this.usersService.forgot('forgot-password',{email,token,created_at,confirmed_at});
  }

  @Post('/resetpassword/:email/:token')
  async resetpassword(@Param('email') email: string,@Param('token') token: string,@Body('password') password: string) {
    return this.usersService.resetpassword('reset-password',{email,token,password,});
  }

  @Post('/confirmaccount/:email/:token')
  async confirmaccount(@Param('email') email: string,@Param('token') token: string) {
    return this.usersService.confirmaccount('confirm-findall',{email,token,});
  }

  @Post('/AffectRoleToUser')
  updatepush(@Body() data: any) {
    return this.usersService.updatepush('user-AffectRoleToUser',data);
  }

  @Post('signin')
  async signin(@Body() data: any) {
    return await  this.usersService.signin('sign-in',data);
  }
}
