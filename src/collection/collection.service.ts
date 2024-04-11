import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import * as mysql from 'mysql';
require("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

@Injectable()
export class CollectionService {
  create(createCollectionDto: CreateCollectionDto) {
    const { Userid, Publication_id } = createCollectionDto
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO Collection (Userid, Publication_id) VALUES (${Userid}, ${Publication_id});`, (error, results, field) => {
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
    return `This action returns all collection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
