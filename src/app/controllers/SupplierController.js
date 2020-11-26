const SupplierService = require('../services/supplier.service')
const Yup = require('yup')
class SupplierController {
  async listAll(req, res) {
    try {
      const suppliers = await SupplierService.list()

      return res.status(200).json({ data: suppliers, status: true });

    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async getSupplier(req, res) {
    const { id } = req.params
    const supplier = await SupplierService.getById(id);

    return res.json({ data: supplier });
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      razaoSocial: Yup.string().max(60).required(),
      cnpj: Yup.string().length(14).required(),
      nomeFantasia: Yup.string().max(60).required(),
      endereco: Yup.string().max(60).required(),
      cidade: Yup.string().max(60).required(),
      uf: Yup.string().length(2).required(),
      telefone: Yup.string().min(8).max(11).required(),
      email: Yup.string().email().required(),
      site: Yup.string()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Campos inválidos', status: false });
    }

    try {
      const payload = {...req.body}

      const createdSupplier = await SupplierService.create(payload)

      return res.status(201).json({ data: createdSupplier, status: true });

    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      razaoSocial: Yup.string().max(60).required(),
      cnpj: Yup.string().length(14).required(),
      nomeFantasia: Yup.string().max(60).required(),
      endereco: Yup.string().max(60).required(),
      cidade: Yup.string().max(60).required(),
      uf: Yup.string().length(2).required(),
      telefone: Yup.string().min(8).max(11).required(),
      email: Yup.string().email().required(),
      site: Yup.string()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Campos inválidos', status: false });
    }

    try {
      const { id } = req.params;
      const payload = {...req.body}

      const updatedSupplier = await SupplierService.update(id, payload);

      return res.status(201).json({ data: updatedSupplier, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await SupplierService.delete(id)

      return res.status(200).json({ message: 'Fornecedor deletado', status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }
}

module.exports = new SupplierController();
