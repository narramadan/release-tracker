import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entities';

export const userProviders = [
    {
        provide: 'UserRepository',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DbConnectionToken'],
    }
];