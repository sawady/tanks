import { IsString, IsNotEmpty, IsAlphanumeric, Length } from 'class-validator';

export class CreateTankDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Length(10, 20)
  serialNumber: string;

  @IsNotEmpty()
  @IsString()	
  @IsAlphanumeric() 
  @Length(10, 20)
  lot: string;

  @IsNotEmpty()
  @IsString()	
  @Length(5, 40)
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  gasType: string;

}
