module.exports = (sequelize, Sequelize) => {
  const Tasks = sequelize.define(
    'tasks',
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: Sequelize.STRING,
      limit: Sequelize.INTEGER,
      isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
  return Tasks;
};
