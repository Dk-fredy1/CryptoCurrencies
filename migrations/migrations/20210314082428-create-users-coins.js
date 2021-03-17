module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_coins', {
      userId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      coinId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('users_coins');
  }
};
