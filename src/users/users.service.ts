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
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM User', (error, results) => {
        if (error) {
          reject(error);
        }
        else {
          resolve(results)
        }
      })
    });
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

  async update(id: number, columnName: string, columnValue: any) {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE User SET ${columnName} = ? WHERE id = ?`,
        [columnValue, id],
        (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        },
      );
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
