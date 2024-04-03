import { IsEmail, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';


export class CreateUserDto {
    @IsOptional()
    id: number;

    @IsNotEmpty()
    Pseudo: string;

    email: string;

    birthdate: Date;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    ProfilePicture: string
}
