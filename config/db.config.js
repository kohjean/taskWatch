module.exports = {
  host: process.env.NODE_DB_HOST,
  user: process.env.NODE_DB_USER,
  password: process.env.NODE_DB_PASS,
  database: process.env.NODE_DB_NAME,
  dialect: 'mysql',
  timezone: '+09:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
