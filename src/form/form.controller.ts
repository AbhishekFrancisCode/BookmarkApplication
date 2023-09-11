import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto';

@Controller('form')
export class FormController {
  constructor(private formServices: FormService) {}

  @Post('formdata')
  form(@Body() dto: FormDto) {
    return this.formServices.form(dto);
  }

  @Get('formdatas')
  formData() {
    return this.formServices.formData();
  }
}
