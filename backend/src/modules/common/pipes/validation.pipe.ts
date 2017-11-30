import { HttpException } from '@nestjs/common';
import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { FieldMessage, BadRequestException } from '../exceptions/badrequest.exception';
import { Logger } from '../logger';

/*
Global Pipe to validate request body and throw bad request excpetion if there are any validation errors.
*/
@Pipe()
export class ValidationPipe implements PipeTransform<any> {
    
    logger: Logger = new Logger("ValidationPipe");

    async transform(value, metadata: ArgumentMetadata) {

        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if (errors.length > 0) {
            let badRequests: FieldMessage[] = [];
            
            for( let error of errors) {

                /*
                 error.constraints has dynamic type added based upon the validation error.

                 Prepare list of error messages that should be published by getting the error type
                 and read the appropriate message
                 */
                let messages: string[] = [];
                for (let property of Object.getOwnPropertyNames(error.constraints)) {
                    messages.push(error.constraints[property]);
                }

                badRequests.push(new FieldMessage(error.property, messages));
            }
            this.logger.error(JSON.stringify(badRequests));

            throw new BadRequestException(badRequests);
        }
        return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}