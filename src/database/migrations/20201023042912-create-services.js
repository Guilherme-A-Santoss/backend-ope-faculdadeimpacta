module.exports = {
  up: async (queryInterface, Sequelize) => {
    const servicesTable = await queryInterface.createTable('Service', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nro_servico: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      prazo_dias: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.INTEGER,
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

    return servicesTable;
  },

  down: async (queryInterface) => {
    const servicesTable = await queryInterface.dropTable('Service');
    return servicesTable;
  },
};
