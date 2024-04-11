import { IsEmail, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';


export class CreateCollectionDto {

    @IsNotEmpty()
    Userid: number

    @IsNotEmpty()
    Publication_id: number
}
