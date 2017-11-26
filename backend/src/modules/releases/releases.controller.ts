import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { ReleasesService } from "./releases.service";

@ApiUseTags('release')
@Controller('release')
export class ReleasesController {

    constructor(
        private releasesService: ReleasesService,
    ) { }

    @Get()
    public async getAllReleases( @Response() res) {
        const releases = await this.releasesService.getAllReleases();
        
        res.status(HttpStatus.OK).json(releases);
    }

    @Get('/:id')
    public async getRelease( @Response() res, @Param('id') id) {
        const release = await this.releasesService.getRelease(id);
        
        res.status(HttpStatus.OK).json(release);
    }

    @Post()
    public async createRelease( @Response() res,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password) {
        const result = await this.releasesService.createRelease(username, email, password);
        
        res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    public async updateRelease( @Response() res,
                                @Param('id') id,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password,
                                @Body('role') role) {
        const result = await this.releasesService.updateRelease(id, username, email, password, role);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }

    @Delete('/:id')
    public async deleteRelease( @Response() res, @Param('id') id) {
        const result = await this.releasesService.deleteRelease(id);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }
}