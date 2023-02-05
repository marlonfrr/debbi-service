import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

interface ILink {}

@Entity({ name: 'links' })
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link_id: string;

  @Column()
  institution: string;

  @ManyToOne(() => User, (user) => user.links)
  user_id: User;
}
