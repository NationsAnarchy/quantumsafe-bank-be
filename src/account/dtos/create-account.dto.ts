import {
    IsString,
    IsNumber,
    Min,
  } from 'class-validator';
  
  export class CreateAccountDto {
    @IsString()
    accountType: string

    // @IsString()
    // accountNumber: string

    @IsNumber()
    @Min(0)
    accountBalance: number
  }
  