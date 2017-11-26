import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { ReleasesController } from './releases.controller';
import { ReleasesService } from './releases.service';

@Module({
    controllers: [ReleasesController],
    components: [ReleasesService]
})
export class ReleasesModule { }