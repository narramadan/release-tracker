import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { ProductsService } from "./products.service";

@ApiUseTags('product')
@Controller('product')
export class ProductsController {

    constructor(
        private productsService: ProductsService,
    ) { }

    @Get()
    public async getAllProducts( @Response() res) {
        const products = await this.productsService.getAllProducts();
        
        res.status(HttpStatus.OK).json(products);
    }

    @Get('/:id')
    public async getProduct( @Response() res, @Param('id') id) {
        const product = await this.productsService.getProduct(id);
        res.status(HttpStatus.OK).json(product);
    }

    @Post()
    public async createProduct( @Response() res,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password) {
        const result = await this.productsService.createProduct(username, email, password);
        
        res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    public async updateProduct( @Response() res,
                                @Param('id') id,
                                @Body('username') username,
                                @Body('email') email,
                                @Body('password') password,
                                @Body('role') role) {
        const result = await this.productsService.updateProduct(id, username, email, password, role);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }

    @Delete('/:id')
    public async deleteProduct( @Response() res, @Param('id') id) {
        const result = await this.productsService.deleteProduct(id);
        
        res.status(HttpStatus.ACCEPTED).json(result);
    }
}