import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'i am signup';
  }

  signin() {
    return 'i am signin';
  }
}
