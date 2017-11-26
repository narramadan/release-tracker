import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    controllers: [ProductsController],
    components: [ProductsService]
})
export class ProductsModule { }