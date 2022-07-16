import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports : [
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
  ],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
