import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

/*
 Custom exception class to throw bad request
 */
export class BadRequestException extends HttpException {
    constructor(badRequest: FieldMessage[]) {
        super(badRequest, HttpStatus.BAD_REQUEST);
    }
}

export class FieldMessage {
    field: string;
    message: string[];

    constructor(field:string, message: string[]) {
        this.field = field;
        this.message = message;
    }
}