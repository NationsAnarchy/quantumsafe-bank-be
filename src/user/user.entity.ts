import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Account } from 'src/account/account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column()
  country: string;

  // The last field should be for files, but I couldn't quite figure out in time
  @Column()
  proofOfIdentity: any;

  @OneToMany(() => Account, (account) => account.user)
  account: Account[];
}
