const Supplier = require('../models/Supplier');

class SupplierController {
  async index(req, res) {
    const suppliers = await Supplier.findAll();

    return res.json({ data: suppliers });
  }

  async store(req, res) {
    const {
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    } = req.body;

    const supplier = await Supplier.create({
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    });

    return res.status(201).json({ data: supplier });
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      razaoSocial,
      nomeFantasia,
      endereco,
      cidade,
      uf,
      telefone,
      email,
      site,
    } = req.body;

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

    return res.json(supplier);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Supplier.destroy({ where: { id } });

    return res.send();
  }
}

module.exports = new SupplierController();
