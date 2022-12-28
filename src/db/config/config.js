const { config } = require('../../config/config');
console.log(config)
module.exports = {
  development: {
    url: config.dbUrl,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: "postgres"
  },
  production: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
