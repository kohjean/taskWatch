module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Users;
};
