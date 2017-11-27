import { Connection, Repository } from 'typeorm';
import { User, UserDetails } from './entities/user.entities';

export const userProviders = [
    {
        provide: 'UserRepository',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'UserDetailsRepository',
        useFactory: (connection: Connection) => connection.getRepository(UserDetails),
        inject: ['DbConnectionToken'],
    },
];