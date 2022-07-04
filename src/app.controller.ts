import { AppService } from './app.service';
import { Controller, Get, Post ,Request,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}
  
  @Post('login')
  login(@Request() req):any {
    
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}