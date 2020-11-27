module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orderServicesTable = await queryInterface.createTable('OrderService', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data_entrega: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_funcionario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status_os: {
        type: Sequelize.ENUM('pendente', 'iniciada', 'concluida', 'cancelada'),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      items_servico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Customer', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',

      },
      categoria: {
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

    return orderServicesTable;
  },

  down: async (queryInterface) => {
    const orderServicesTable = await queryInterface.dropTable('OrderService');
    return orderServicesTable;
  },
};
