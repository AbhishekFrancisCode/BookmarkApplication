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
          address: dto.address,
          city: dto.city,
          state: dto.state,
          pincde: dto.pincde,
          email: dto.email,
          contact_number: dto.contact_number,
          customer_group: dto.customer_group,
          project_cap: dto.project_cap,
          project_size: dto.project_size,
          isStudio: dto.isStudio,
          team_cap: dto.team_cap,
          experience: dto.experience,
          project_cites: dto.project_cites,
          experience_des: dto.experience_des,
          key_problems: dto.key_problems,
          services_finemake: dto.services_finemake,
          invite_from: dto.invite_from,
        },
      });
      console.log(form);
      return form;
    } catch (error) {
      console.log(error);
    }
  }

  async formData() {
    try {
      const formData = await this.prisma.formdata.findMany();
      return formData;
    } catch (error) {}
  }
}
