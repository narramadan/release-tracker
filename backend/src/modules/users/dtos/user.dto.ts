import { IsInt, IsNotEmpty, MinLength, IsOptional } from "class-validator";

import { VALIDATION_ERROR_CODES } from '../../common/constants/codes.constants';

export class UserDto {

    @IsOptional()
    @IsInt()    
    readonly id: number;
    
    @IsNotEmpty({ message: VALIDATION_ERROR_CODES.WARN_IS_REQUIRED })
    readonly firstName: string;

    @IsNotEmpty({ message: VALIDATION_ERROR_CODES.WARN_IS_REQUIRED })
    readonly lastName: string;

    @IsNotEmpty({ message: VALIDATION_ERROR_CODES.WARN_IS_REQUIRED })
    readonly userName: string;

    @IsNotEmpty({ message: VALIDATION_ERROR_CODES.WARN_IS_REQUIRED })
    readonly password: string;
}