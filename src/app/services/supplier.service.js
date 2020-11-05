const Supplier = require('../models/Supplier');

class Service {
  async create(payload) {
    const {
      razaoSocial,
      cnpj,
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
      cnpj,
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

  async getById(id) {
    return Supplier.findByPk(id);
  }

  async update(id, payload) {
    const {
      razaoSocial,
      cnpj,
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
      cnpj,
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
