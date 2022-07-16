import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto,'createRole');
  }

  @Get()
  findAll() {
    return this.rolesService.findAll('findAllRoles');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne('findOneRole',+id);
  }

  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update('updateRole',_id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove('removeRole',+id);
  }
}
