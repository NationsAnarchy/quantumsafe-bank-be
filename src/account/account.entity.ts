import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountType: string;

  @Column()
  accountNumber: string

  @Column()
  accountBalance: number

  @ManyToOne(() => User, (user) => user.account)
  user: User;
}
