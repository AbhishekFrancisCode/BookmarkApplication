import { Injectable } from '@nestjs/common';
import { FormDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class FormService {
  constructor(private prisma: PrismaService) {}
  async form(dto: FormDto) {
    try {
      const form = await this.prisma.formdata.create({
        data: {
          company_name: dto.company_name,
          contact_name: dto.contact_name,
        },
      });
      return form;
    } catch (error) {}
  }

  async formData() {
    try {
      const formData = await this.prisma.formdata.findMany();
      return formData;
    } catch (error) {}
  }
}
