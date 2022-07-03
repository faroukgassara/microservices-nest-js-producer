import { AppService } from './app.service';
import { Controller, Get, Post ,Request,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any {
    return this.authService.login('sign-in',{
      message: req.user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}