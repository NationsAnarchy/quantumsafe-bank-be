import { Expose, Transform } from 'class-transformer';
// import { User } from 'src/user/user.entity';

export class AccountDto {
  @Expose()
  id: number;
  
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;  
}
