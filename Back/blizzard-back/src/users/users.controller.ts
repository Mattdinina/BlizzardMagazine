// controllers/users.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    try {
      const allUsers = await this.usersService.findAll();
      return allUsers;
    } catch (error) {
      return `error : ${error.message}`;
    }
  }

  @Get(':pseudo')
  async findOne(@Param('pseudo') pseudo: string) {
    try {
      const user = await this.usersService.findOne(pseudo);
      return user;
    } catch (error) {
      return `error : ${error.message}`;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      // Extraire la première clé et la première valeur du DTO
      const columnName = Object.keys(updateUserDto)[0];
      const columnValue = updateUserDto[columnName];

      // Appel du service pour mettre à jour
      return await this.usersService.update(id, columnName, columnValue);
    } catch (error) {
      return { error: error.message }; // Ou autre gestion des erreurs
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
