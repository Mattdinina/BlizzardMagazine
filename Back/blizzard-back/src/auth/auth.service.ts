import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(
        pseudo: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(pseudo); // Utilisation de findOne au lieu de findUser
        if (!user || !compareSync(pass, user.password)) { // Vérification si l'utilisateur existe et si le mot de passe est correct
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, pseudo: user.pseudo };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}