import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as mysql from 'mysql';
import * as bcrypt from 'bcrypt';
require("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

export type User = any;

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const { Pseudo, email, birthdate, password, ProfilePicture } = createUserDto;

    const hash = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO User (pseudo, email, birthdate, password, profilePicture) VALUES (?, ?, ?, ?, ?)', [Pseudo, email, birthdate, hash, ProfilePicture], (error, results, fields) => {
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

  async findOne(username: string): Promise<UserEntity | undefined> {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM User WHERE Pseudo = ?',
        [username],
        (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            const user = results[0];
            if (user) {
              // Convertir les propriétés en minuscules
              const formattedUser = {
                id: user.id,
                pseudo: user.Pseudo,
                email: user.Email,
                password: user.Password,
                birthdate: user.Birthdate,
                profilePicture: user.ProfilePicture,
                role: user.role
              };
              resolve(formattedUser);
            } else {
              resolve(undefined);
            }
          }
        }
      );
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
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM User WHERE id = ${id}`, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}