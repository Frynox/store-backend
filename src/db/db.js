import { Sequelize } from "sequelize";


const sequelize = new Sequelize('postgres', 'postgres', 'G4r0uB345t/*', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;