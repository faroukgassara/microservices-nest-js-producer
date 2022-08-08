import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';

@Injectable()
export class AffectationService {

  constructor(@Inject('user-management') private readonly client: ClientProxy) { }


  // ***************** Create Affectation *****************
  async create(createAffectationDto: CreateAffectationDto, pattern: string) {
    return await this.client.send(pattern, createAffectationDto).toPromise();
  }

  // ***************** Get All Affectations *****************
  async findAll(pattern: string) {
    return await this.client.send(pattern, pattern).toPromise();
  }

  // ***************** Find One Affectation *****************
  async findOne(pattern: string, id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  // ***************** Update Affectation *****************
  update(id: number, updateAffectationDto: UpdateAffectationDto) {
    return `This action updates a #${id} affectation`;
  }

  // ***************** Delete Affectation *****************
  async remove(pattern: string, id: number) {
    return await this.client.send(pattern, id).toPromise();
  }

  // ***************** Find Affectation By User Email *****************
  async findByUserEmail(pattern: string, email: string) {
    return await this.client.send(pattern, email).toPromise();
  }
}
