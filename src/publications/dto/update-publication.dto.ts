import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicationDto } from './create-publication.dto';
import { IsEmail, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {
    @IsOptional()
    Message: string

    @IsOptional()
    Contenu_multimedia: string

    @IsOptional()
    Auteur: string

    @IsOptional()
    DateApparition: Date

    @IsOptional()
    ID_user: number
}
