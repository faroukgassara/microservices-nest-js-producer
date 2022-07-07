import { AppService } from './app.service';
import { Body, Controller, Get, Post ,Request,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Role } from './schemas/role.enum';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}
  

  // ***************** Sign In *****************
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    await  this.appService.login('sign-in',req.user);
    return await this.authService.login(req.user);
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
}