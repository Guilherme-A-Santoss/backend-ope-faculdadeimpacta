const Costumer = require('../models/Costumer');

class Service {
  async create(payload) {
    const {
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      sexo
    } = payload

    return Costumer.create({
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      sexo
    });
  }

  async list() {
    return Costumer.findAll();
  }

  async update(id, payload) {
    const costumer = await Costumer.findByPk(id);

    const {
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      sexo
    } = payload

    await costumer.update({
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      sexo
    });

    return costumer
  }

  async delete(id) {
    return Costumer.destroy({ where: { id } });
  }
}

module.exports = new Service();
