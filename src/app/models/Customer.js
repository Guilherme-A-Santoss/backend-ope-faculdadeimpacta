const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Customer extends Model {
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

    return this
  }
}
module.exports = Customer;
