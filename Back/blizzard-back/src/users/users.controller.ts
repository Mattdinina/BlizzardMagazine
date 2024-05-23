import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post("/advertiser")
  async createAdvertiser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createAdvertiser(createUserDto)
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

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      const columnName = Object.keys(updateUserDto)[0];
      const columnValue = updateUserDto[columnName];
      return await this.usersService.update(id, columnName, columnValue);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Patch('modify-password')
  async modifyPassword(@Body('password') password: string, @Request() req) {
    const pseudo = req.user.pseudo;
    return this.usersService.changePassword(pseudo, password);
  }
}
