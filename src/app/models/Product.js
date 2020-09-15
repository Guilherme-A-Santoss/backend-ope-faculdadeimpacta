import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        marca: Sequelize.STRING,
        preco: Sequelize.DECIMAL,
        cod_barras: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;
