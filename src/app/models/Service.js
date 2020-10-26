const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        nro_servico: Sequelize.STRING,
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        valor: Sequelize.DECIMAL,
        prazo_dias: Sequelize.INTEGER,
        tipo: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Service;
