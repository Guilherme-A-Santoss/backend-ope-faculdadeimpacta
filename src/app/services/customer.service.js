const Customer = require('../models/Customer');

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

    return Customer.create({
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
    return Customer.findAll({ order: [["id", "ASC"]] });
  }

  async getById(id) {
    return Customer.findByPk(id);
  }

  async update(id, payload) {
    const customer = await Customer.findByPk(id);

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

    await customer.update({
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

    return customer
  }

  async delete(id) {
    return Customer.destroy({ where: { id } });
  }
}

module.exports = new Service();
