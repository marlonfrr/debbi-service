import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Link } from './entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ec2-3-93-206-109.compute-1.amazonaws.com',
  port: 5432,
  username: 'wprzyuwzrxqvqu',
  password: '840e08fbcd59b5cba9a45c4c993398e9c8584d794fe51350aa0b41ad814d5036',
  database: 'd4v40kl2qd1d9a',
  synchronize: true,
  logging: false,
  entities: [User, Link],
  migrations: [],
  subscribers: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
