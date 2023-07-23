import { Sequelize } from 'sequelize';
import { db_host, db_name, db_port, db_password, db_user } from './config';

module.exports = new Sequelize({
  dialect: 'postgres',
  host: db_host,
  port: db_port,
  database: db_name,
  username: db_user,
  password: db_password,
});
