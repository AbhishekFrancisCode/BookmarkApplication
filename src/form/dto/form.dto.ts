import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class FormDto {
  @IsString()
  @IsNotEmpty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  contact_name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  pincde: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  contact_number: string;

  @IsArray()
  @IsNotEmpty()
  customer_group: string[];

  @IsString()
  @IsNotEmpty()
  project_cap: string;

  @IsString()
  @IsNotEmpty()
  project_size: string;

  @IsString()
  @IsNotEmpty()
  isStudio: string;

  @IsString()
  @IsNotEmpty()
  team_cap: string;

  @IsString()
  @IsNotEmpty()
  experience: string;

  @IsString()
  @IsNotEmpty()
  project_cites: string;

  @IsString()
  @IsNotEmpty()
  experience_des: string;

  @IsString()
  @IsNotEmpty()
  key_problems: string;

  @IsArray()
  @IsNotEmpty()
  services_finemake: string[];

  @IsString()
  @IsNotEmpty()
  invite_from: string;
}
