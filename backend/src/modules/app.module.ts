import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ReleasesModule } from './releases/releases.module';
import { VersionsModule } from './versions/versions.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  modules: [UsersModule
            , ProductsModule
            , ReleasesModule
            , VersionsModule
            , CustomersModule],
  controllers: [],

  components: [],
})
export class ApplicationModule {}
