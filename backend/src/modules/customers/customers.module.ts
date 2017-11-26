import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
    controllers: [CustomersController],
    components: [CustomersService]
})
export class CustomersModule { }