import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService,JwtModule,JwtService],
})
export class AppModule {}