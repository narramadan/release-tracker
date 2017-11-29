import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { UsersService } from "./users.service";
import { UserDto } from './dtos/user.dto';
import { User } from './entities/user.entities';

@ApiUseTags('user')
@Controller('user')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ) { }

    @Get()
    public async getAllUsers( @Response() res) {
        const users = await this.usersService.getAllUsers();
        
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getUser( @Response() res, @Param('id') id) {
        const user = await this.usersService.getUser(id);
        
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async createUser( 
        @Response() res, 
        @Body() userDto : UserDto) {

        let user = new User();
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.userName = userDto.userName;
        user.password = userDto.password;

        const id:number = await this.usersService.createUser(user);
        
        res.status(HttpStatus.CREATED).json(id);
    }

    @Put()
    public async updateUser( 
        @Response() res,
        @Body() userDto: UserDto) {

        let user = new User();
        user.id = userDto.id;
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.userName = userDto.userName;
        user.password = userDto.password;

        await this.usersService.updateUser(user);

        res.status(HttpStatus.CREATED).json(user);
    }

    @Delete('/:id')
    public async deleteUser( @Response() res, @Param('id') id) {
        const result = await this.usersService.deleteUser(id);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }
}