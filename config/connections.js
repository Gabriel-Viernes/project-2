const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

// const db = new Sequelize({
//   user: 'root', //process.env.DB_USER,
//   password: 'password', //process.env.DB_PASSWORD,
//   database: 'juicebox.db',
//   host: '127.0.0.1', 
//   dialect: 'mysql'
//   
// });

}

module.exports = sequelize;