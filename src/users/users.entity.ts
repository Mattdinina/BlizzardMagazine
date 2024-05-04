import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
