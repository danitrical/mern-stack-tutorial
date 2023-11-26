const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Danish777.',
  database: 'amazon_ecom',
};

const dbConnection =
  mysql.createPool(dbConfig);

module.exports = dbConnection.promise();