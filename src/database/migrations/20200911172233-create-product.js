module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productTable = await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      cod_barras: {
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
    const productTable = await queryInterface.dropTable('products');
    return productTable;
  },
};
