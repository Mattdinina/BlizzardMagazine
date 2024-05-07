import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    ADVERTISER = 'advertiser',
}

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    birthdate: Date;

    @Column({ nullable: true })
    profilePicture: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}
