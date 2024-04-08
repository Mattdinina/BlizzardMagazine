import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import * as mysql from 'mysql';
require("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

@Injectable()
export class PublicationsService {
  create(createPublicationDto: CreatePublicationDto) {
    const { ID_user, Message } = createPublicationDto
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO Publications (ID_user, Message) VALUES (${ID_user}, '${Message}')`, (error, results, field) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(results)
        }
      })
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM Publications`, (error, results, fields) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(results)
        }
      })

    });
  }

  findOne(id: number) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM Publications where id = ${id}`, (error, results, fields) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(results)
        }
      })

    });
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    const { Message } = updatePublicationDto
    return new Promise((resolve, reject) => {
      connection.query(`update Publications SET Message = '${Message}' where id = ${id}`, (error, results, fields) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(results)
        }
      })

    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM Publications WHERE id = ${id}`, (error, results, fields) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(results)
        }
      })

    });
  }
}
