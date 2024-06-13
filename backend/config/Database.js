import { Sequelize } from "sequelize";

const db = new Sequelize("db_crudmern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
