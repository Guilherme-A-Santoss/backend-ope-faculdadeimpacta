const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class OrderService extends Model {
  static init(sequelize) {
    super.init(
      {
        dataEntrega: Sequelize.STRING,
        statusOs: Sequelize.ENUM('pendente', 'iniciada', 'concluida', 'cancelada'),
        descricao: Sequelize.STRING,
        valor: Sequelize.DECIMAL,
        itemsServico: Sequelize.ARRAY(Sequelize.STRING),
        categoria: Sequelize.STRING,
        idCliente: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_funcionario', as: 'Funcionario' })
    this.belongsTo(models.Customer, { foreignKey: 'id_cliente', as: 'Cliente'} )
  }
}

module.exports = OrderService;
