import { Module } from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { AffectationController } from './affectation.controller';

@Module({
  controllers: [AffectationController],
  providers: [AffectationService]
})
export class AffectationModule {}
