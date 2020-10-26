const SupplierService = require('../services/supplier.service')
class SupplierController {
  async listAll(req, res) {
    try {
      const suppliers = await SupplierService.list()

      return res.status(200).json({ data: suppliers, status: true });

    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async create(req, res) {
    try {
      const payload = {...req.body}

      const createdSupplier = await SupplierService.create(payload)

      return res.status(201).json({ data: createdSupplier, status: true });

    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
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
