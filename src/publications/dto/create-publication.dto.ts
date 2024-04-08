import { IsEmail, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';


export class CreatePublicationDto {

    @IsOptional()
    Message: string

    @IsOptional()
    Contenu_multimedia: string

    @IsOptional()
    Auteur: string

    @IsOptional()
    DateApparition: Date

    ID_user: number
}
