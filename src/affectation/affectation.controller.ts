import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AffectationService } from './affectation.service';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) {}


  @Post()
  create(@Body() createAffectationDto: CreateAffectationDto) {
    return this.affectationService.create(createAffectationDto,'createAffectation');
  }

  @Get()
  findAll() {
    return this.affectationService.findAll('findAllAffectation');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affectationService.findOne('findOneAffectation',+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffectationDto: UpdateAffectationDto) {
    return this.affectationService.update(+id, updateAffectationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affectationService.remove('removeAffectation',+id);
  }

  @Get('/findByUserEmail/:email')
  findByUserEmail(@Param('email') email: string) {
    return this.affectationService.findByUserEmail('findByUserEmail',email);
  }
  
}
