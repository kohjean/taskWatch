const { sequelize, Sequelize } = require('.');

module.exports = (sequelize, Sequelize) => {
  const Actions = sequelize.define('actions', {
    taskId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pastTime: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Actions;
};
