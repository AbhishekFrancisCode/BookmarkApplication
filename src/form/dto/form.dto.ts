import { IsNotEmpty, IsString } from 'class-validator';

export class FormDto {
  @IsString()
  @IsNotEmpty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  contact_name: string;
}
