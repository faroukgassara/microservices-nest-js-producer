import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[UsersModule,PassportModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret:'SECRET',
      signOptions: { expiresIn: '60s' },
    }),
    ClientsModule.register([
      {
        name: 'sign-in',
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
  ],
  providers:[AuthService,LocalStrategy,JwtStrategy],
  exports :[AuthService]
})
export class AuthModule {}