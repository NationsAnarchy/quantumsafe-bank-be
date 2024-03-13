import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Account } from 'src/account/account.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column()
  country: string;

  // The last field should be for files, but I couldn't quite figure out in time
  // @Column()
  // proofOfIdentity: any;

  @OneToMany(() => Account, (account) => account.user)
  account: Account[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) this.password = await bcrypt.hash(this.password, 12);
  }
}
