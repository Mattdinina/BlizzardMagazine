import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as mysql from 'mysql';
require("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { Pseudo, email, birthdate, password, ProfilePicture } = createUserDto;
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO User (pseudo, email, birthdate, password, profilePicture) VALUES (?, ?, ?, ?, ?)', [Pseudo, email, birthdate, password, ProfilePicture], (error, results, fields) => {
        if (error) {
          reject(error);
        }
        else {
          resolve(results);
        }
      });

    })
  }



  findAll() {
    return `This action returns all users`;
  }

  findOne(pseudo: string): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM User WHERE pseudo = ?', [pseudo], (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
