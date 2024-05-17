import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Get('logout')
    logout(@Request() req) {
        // Vérifier si l'utilisateur est déjà déconnecté
        if (!req.headers.authorization) {
            return { message: 'Vous êtes déjà déconnecté' };
        }
        // Supprimer le jeton JWT des en-têtes de la demande
        delete req.headers.authorization;
        return { message: 'Déconnexion réussie' };
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.pseudo, signInDto.password);
    }

    // utiliser des use Guards à chaque fois qu'on veut protéger une route !
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}