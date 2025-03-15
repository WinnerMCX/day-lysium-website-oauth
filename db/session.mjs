import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'oskin74d.beget.tech',
    dialect: 'mysql',
    dialectModule: mysql2,
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Connected to website MySQL db!'))
  .catch((err) => console.error('Connection error to website MySQL db:', err));

export default sequelize;
