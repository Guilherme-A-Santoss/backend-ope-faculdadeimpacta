const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        nroServico: Sequelize.STRING,
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        valor: Sequelize.DECIMAL,
        prazoDias: Sequelize.INTEGER,
        tipo: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Service;
