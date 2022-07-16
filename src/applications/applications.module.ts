import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
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
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {}
