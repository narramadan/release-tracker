import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { VersionsService } from "./versions.service";

@ApiUseTags('version')
@Controller('version')
export class VersionsController {

    constructor(
        private versionsService: VersionsService,
    ) { }

    @Get()
    public async getAllVersions( @Response() res) {
        const users = await this.versionsService.getAllVersions();
        
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getVersion( @Response() res, @Param('id') id) {
        const user = await this.versionsService.getVersion(id);
        
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async createVersion( @Response() res,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password) {
        const result = await this.versionsService.createVersion(username, email, password);
        
        res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    public async updateVersion( @Response() res,
                                @Param('id') id,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password,
                                @Body('role') role) {
        const result = await this.versionsService.updateVersion(id, username, email, password, role);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }

    @Delete('/:id')
    public async deleteVersion( @Response() res, @Param('id') id) {
        const result = await this.versionsService.deleteVersion(id);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }
}