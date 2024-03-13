import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AccountDto } from './dtos/account.dto';
import { CreateAccountDto } from './dtos/create-account.dto';
import { User } from 'src/user/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/user/decorators/current-user.decorator';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Post('/create')
    @UseGuards(AuthGuard)
    @Serialize(AccountDto)
    createAccount(@Body() body: CreateAccountDto, @CurrentUser() user: User) {
        return this.accountService.create(body, user)
    }
}
