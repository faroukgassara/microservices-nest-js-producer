import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne('user-findone',email);

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (user && isMatch && user.locked == false && user.enabled == true) {
      const { password, ...result } = user;
      return result;
    }else {
      throw new UnauthorizedException();
    }
  }

  async login(user : any){
    const payload = {user}
    return {
      access_token: this.jwtService.sign(payload),
      user:payload.user
    };
  }
}
