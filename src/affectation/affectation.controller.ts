import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AffectationService } from './affectation.service';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) { }


  // ***************** Create Affectation *****************
  @Post()
  create(@Body() createAffectationDto: CreateAffectationDto) {
    return this.affectationService.create(createAffectationDto, 'createAffectation');
  }

  // ***************** Get All Affectations *****************
  @Get()
  findAll() {
    return this.affectationService.findAll('findAllAffectation');
  }

  // ***************** Find One Affectation *****************
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affectationService.findOne('findOneAffectation', +id);
  }

  // ***************** Update Affectation *****************
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffectationDto: UpdateAffectationDto) {
    return this.affectationService.update(+id, updateAffectationDto);
  }

  // ***************** Delete Affectation *****************
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affectationService.remove('removeAffectation', +id);
  }

  // ***************** Find Affectation By User Email *****************
  @Get('/findByUserEmail/:email')
  findByUserEmail(@Param('email') email: string) {
    return this.affectationService.findByUserEmail('findByUserEmail', email);
  }

  // ***************** Find Affectation By User id *****************
  @UseGuards(JwtAuthGuard)
  @Get('/findByUserID/:_id')
  findByUserID(@Param('_id') _id: string) {
    return this.affectationService.findByUserID('findByUserID', _id);
  }

}
