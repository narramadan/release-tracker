import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { CustomersService } from "./customers.service";

@ApiUseTags('customer')
@Controller('customer')
export class CustomersController {

    constructor(
        private customersService: CustomersService,
    ) { }

    @Get()
    public async getAllCustomers( @Response() res) {
        const customers = await this.customersService.getAllCustomers();
        
        res.status(HttpStatus.OK).json(customers);
    }

    @Get('/:id')
    public async getCustomer( @Response() res, @Param('id') id) {
        const customer = await this.customersService.getCustomer(id);
        
        res.status(HttpStatus.OK).json(customer);
    }

    @Post()
    public async createCustomer( @Response() res,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password) {
        const result = await this.customersService.createCustomer(username, email, password);
        
        res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    public async updateCustomer( @Response() res,
                                @Param('id') id,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password,
                                @Body('role') role) {
        const result = await this.customersService.updateCustomer(id, username, email, password, role);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }

    @Delete('/:id')
    public async deleteCustomer( @Response() res, @Param('id') id) {
        const result = await this.customersService.deleteCustomer(id);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }
}