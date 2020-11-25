const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class OrderService extends Model {
  static init(sequelize) {
    super.init(
      {
        dataEntrega: Sequelize.STRING,
        statusOs: Sequelize.STRING,
        descricao: Sequelize.STRING,
        valor: Sequelize.DECIMAL,
        categoria: Sequelize.STRING,
        idCliente: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_funcionario', as: 'Funcionario' })
    this.belongsTo(models.Customer, { foreignKey: 'id_cliente', as: 'Cliente'} )
  }
}

module.exports = OrderService;
