import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { VersionsController } from './versions.controller';
import { VersionsService } from './versions.service';

@Module({
    controllers: [VersionsController],
    components: [VersionsService]
})
export class VersionsModule { }