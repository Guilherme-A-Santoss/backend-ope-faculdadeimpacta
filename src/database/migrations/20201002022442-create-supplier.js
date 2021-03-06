const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const suppliersTable = await queryInterface.createTable('Supplier', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      razao_social: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_fantasia: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      site: {
        type: Sequelize.STRING,
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

    return suppliersTable;
  },

  down: async (queryInterface) => {
    const suppliersTable = await queryInterface.dropTable('Supplier');
    return suppliersTable;
  },
};
