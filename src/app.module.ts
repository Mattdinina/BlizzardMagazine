import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
// Charge les variables d'environnement à partir du fichier .env
require("dotenv").config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [],
      synchronize: true,
    })]
  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
