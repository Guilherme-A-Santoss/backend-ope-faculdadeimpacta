import Sequelize, { Model } from 'sequelize';

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
      },
      {
        sequelize,
      }
    );
  }
}

export default Costumer;
