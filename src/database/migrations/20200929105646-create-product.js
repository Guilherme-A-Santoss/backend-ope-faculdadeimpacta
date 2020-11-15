module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productTable = await queryInterface.createTable('Product', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cod_barras: {
        unique: true,
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

    return productTable;
  },

  down: async (queryInterface) => {
    const productTable = await queryInterface.dropTable('Product');
    return productTable;
  },
};
