import { IsEmail, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';
import { BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcrypt';
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

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
