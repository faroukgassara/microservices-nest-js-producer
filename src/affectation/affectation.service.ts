import { Injectable } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';

@Injectable()
export class AffectationService {
  create(createAffectationDto: CreateAffectationDto) {
    return 'This action adds a new affectation';
  }

  findAll() {
    return `This action returns all affectation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} affectation`;
  }

  update(id: number, updateAffectationDto: UpdateAffectationDto) {
    return `This action updates a #${id} affectation`;
  }

  remove(id: number) {
    return `This action removes a #${id} affectation`;
  }
}
