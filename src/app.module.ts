import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_FILTER } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { ApplicationsModule } from './applications/applications.module';
import { RolesModule } from './roles/roles.module';
import { AffectationModule } from './affectation/affectation.module';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'user-management',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672/hello'],
          queue: 'user-messages',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
    UsersModule,
    AuthModule,
    ApplicationsModule,
    RolesModule,
    AffectationModule],
  controllers: [AppController],
  providers: [AppService,JwtModule,JwtService],
})
export class AppModule {}