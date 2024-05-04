import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PublicationsModule } from './publications/publications.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';
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
    }),
    UsersModule,
    PublicationsModule,
    CollectionModule,
    AuthModule]
  ,
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
