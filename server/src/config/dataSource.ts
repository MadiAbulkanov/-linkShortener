import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Madi',
  password: 'madi123',
  database: 'hw_86',
  synchronize: true,
  logging: true,
  entities: ['src/entities/*{.js,.ts}']
});