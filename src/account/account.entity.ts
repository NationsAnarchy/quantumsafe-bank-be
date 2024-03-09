import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  salesPrice: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToOne(() => User, (user) => user.account)
  user: User;
}
