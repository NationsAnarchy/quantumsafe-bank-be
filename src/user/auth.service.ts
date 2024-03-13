import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signUp(name, email, password, phoneNumber, country) {
    const users = await this.userService.find(email);

    if (users.length)
      throw new BadRequestException('This email is already being used');

    // if (!name) throw new BadRequestException('Name must be not null');
    const newUser = await this.userService.create(
      email,
      name,
      password,
      phoneNumber,
      country,
    );
    return newUser;
  }

  async signIn(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) throw new NotFoundException('User email not found');
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) throw new BadRequestException('Incorrect password');
    return user;
  }
}
