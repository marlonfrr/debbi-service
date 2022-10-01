import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { Password } from '../utils/password';
import { Link } from './Link';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Link, (links) => links.user_id)
  links: Link[];

  @BeforeInsert()
  async beforeInsert() {
    const hashed = await Password.toHash(this.password);
    this.password = hashed;
  }
}
