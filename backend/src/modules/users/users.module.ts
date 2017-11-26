import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    components: [UsersService]
})
export class UsersModule { }