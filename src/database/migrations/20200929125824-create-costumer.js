module.exports = {
  up: async (queryInterface, Sequelize) => {
    const costumersTable = await queryInterface.createTable('Costumer', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['M', 'F']],
        },
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
        unique: true,
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

    return costumersTable;
  },

  down: async (queryInterface) => {
    const costumersTable = await queryInterface.dropTable('Costumer');
    return costumersTable;
  },
};
