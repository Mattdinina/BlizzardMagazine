import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsDateString, IsOptional } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    pseudo?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsDateString()
    birthdate?: Date;

    @IsOptional()
    @IsString()
    profilePicture?: string;
}
