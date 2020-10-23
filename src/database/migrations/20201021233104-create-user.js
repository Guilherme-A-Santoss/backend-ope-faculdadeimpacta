'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return usersTable;
  },

  down: async (queryInterface) => {
    const usersTable = await queryInterface.dropTable('users');
    return usersTable;
  }
};
