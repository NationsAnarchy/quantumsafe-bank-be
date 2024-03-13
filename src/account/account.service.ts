import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dtos/create-account.dto';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private repo: Repository<Account>) {}

  create(accountDto: CreateAccountDto, user: User) {
    const account = this.repo.create(accountDto);
    account.accountNumber = uuidv4();
    account.user = user;
    if (account.accountType !== 'savings' && account.accountType !== 'current') {
      throw new BadRequestException('Incorrect account type')
    }
    return this.repo.save(account);
  }
}
