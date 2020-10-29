const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        marca: Sequelize.STRING,
        preco: Sequelize.DECIMAL,
        codBarras: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Product;
