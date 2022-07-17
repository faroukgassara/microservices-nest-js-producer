import { Module } from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { AffectationController } from './affectation.controller';
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
  controllers: [AffectationController],
  providers: [AffectationService]
})
export class AffectationModule {}
