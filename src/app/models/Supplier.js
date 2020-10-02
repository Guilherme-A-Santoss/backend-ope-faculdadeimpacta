import Sequelize, { Model } from 'sequelize';

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        razaoSocial: Sequelize.STRING,
        nomeFantasia: Sequelize.STRING,
        endereco: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        site: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Supplier;
