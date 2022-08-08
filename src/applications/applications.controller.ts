import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationsService.create(createApplicationDto,'createApplication');
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll('findAllApplications');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne('findOneApplication',+id);
  }


  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateApplicationDto: UpdateApplicationDto) {
    return this.applicationsService.update('updateApplication',_id, updateApplicationDto);
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.applicationsService.remove('removeApplication',_id);
  }


  @UseGuards(JwtAuthGuard)
  @Post('/AffectRoleToApp')
  updatepush(@Body() data: any) {
    return this.applicationsService.updatepush('app-AffectRoleToApp',data);
  }


  @UseGuards(JwtAuthGuard)
  @Post('/DeleteRoleFromApp')
  updatepull(@Body() data: any) {
    return this.applicationsService.updatepush('app-DeleteRoleFromApp',data);
  }
}
