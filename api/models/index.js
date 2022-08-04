const {
  host,
  user,
  password,
  database,
  dialect,
  timezone,
  pool,
} = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  timezone,
  // TODO: ↓何?
  // operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.actions = require('./actions.model')(sequelize, Sequelize);
db.tasks = require('./tasks.model')(sequelize, Sequelize);
db.tasks.hasMany(db.actions);
db.users = require('./users.model.js')(sequelize, Sequelize);
db.users.hasMany(db.tasks);
module.exports = db;
