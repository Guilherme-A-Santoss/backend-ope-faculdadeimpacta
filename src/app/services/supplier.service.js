const Supplier = require('../models/Supplier');

class Service {
  async create(payload) {
    const {
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    } = payload

    return Supplier.create({
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    });
  }

  async list() {
    return Supplier.findAll();
  }

  async update(id, payload) {
    const {
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    } = payload

    const supplier = await Supplier.findByPk(id);

    await supplier.update({
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    });
  }

  async delete(id) {
    return Supplier.destroy({ where: { id } });
  }
}

module.exports = new Service();
