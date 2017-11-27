import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.provider';

@Module({
    modules: [DatabaseModule],
    controllers: [UsersController],
    components: [
        ...userProviders,
        UsersService
    ]
})
export class UsersModule { }