const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Costumer extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        nome: Sequelize.STRING,
        dataNascimento: Sequelize.DATE,
        endereco: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        sexo: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
module.exports = Costumer;
