/* eslint-disable no-undef */
require("dotenv").config();
const { resolve } = require("path");
module.exports = {
  client: "mysql",

  connection: {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    database: process.env.MARIADB_DATABASE,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
  },

  migrations: {
    directory: resolve(__dirname, "src", "database", "migrations"),
  },
};
