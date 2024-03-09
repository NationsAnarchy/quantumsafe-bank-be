import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AccountController } from './account/account.controller';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
import { AccountService } from './account/account.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Account } from './account/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root', // There is a way to use .env file and a separate ConfigService but I couldn't do it
      password: 'admin',
      entities: [User, Account],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    UserController,
    AccountController,
    TransactionController,
  ],
  providers: [AppService, TransactionService, AccountService, UserService],
})
export class AppModule {}
