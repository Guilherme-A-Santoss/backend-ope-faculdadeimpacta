const Sequelize = require('sequelize')
const { Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        nome_usuario: Sequelize.STRING,
        senha: Sequelize.DECIMAL,
        tipo_usuario: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
