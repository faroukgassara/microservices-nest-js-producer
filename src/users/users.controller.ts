import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UsePipes, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ***************** Find All Users *****************
  @Get()
  findAll() {
    return this.usersService.findAll('user-findall');
  }

  // ***************** Find User By Email *****************
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne('user-findone',email);
  }

  // ***************** Update User *****************
  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update('user-update',_id, updateUserDto);
  }

  // ***************** Delete User *****************
  @UseGuards(JwtAuthGuard)
  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.usersService.remove('user-delete',_id);
  }

  // ***************** Sign Up (Create New User) *****************
  @Post('/signup')
  signup(@Body() data: CreateUserDto) {
    return this.usersService.signup('user-management',data);
  }

  // ***************** Add Forget password Request To The DataBase *****************
  @Post('/forgotpassword/:email')
  async forgot(@Param('email') email: string) {
    const crypto = require('crypto');
    const token = crypto.randomBytes(10).toString('hex'); 
    const created_at = new Date().getTime();
    const confirmed_at = null;

    return this.usersService.forgot('forgot-password',{email,token,created_at,confirmed_at});
  }

  // ***************** Reset Password *****************
  @Post('/resetpassword/:email/:token')
  async resetpassword(@Param('email') email: string,@Param('token') token: string,@Body('password') password: string) {
    return this.usersService.resetpassword('reset-password',{email,token,password,});
  }

  // ***************** Confirm Account *****************
  @Post('/confirmaccount/:email/:token')
  async confirmaccount(@Param('email') email: string,@Param('token') token: string) {
    return this.usersService.confirmaccount('confirm-findall',{email,token,});
  }

  // ***************** Affect Role To User *****************
  @UseGuards(JwtAuthGuard)
  @Post('/AffectRoleToUser')
  updatepush(@Body() data: any) {
    return this.usersService.updatepush('user-AffectRoleToUser',data);
  }

  // ***************** Sign In With One Of The Applications*****************
  @Post('signin')
  async signin(@Body() data: any) {
    return await  this.usersService.signin('sign-in',data);
  }
}
