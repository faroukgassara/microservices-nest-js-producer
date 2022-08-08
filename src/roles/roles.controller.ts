import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto,'createRole');
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.rolesService.findAll('findAllRoles');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne('findOneRole',+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update('updateRole',_id, updateRoleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.rolesService.remove('removeRole',_id);
  }
}
