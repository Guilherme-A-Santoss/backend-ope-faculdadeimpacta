const CustomerService = require('../services/customer.service');

class CustomerController {
  async listAll(req, res) {
    const customers = await CustomerService.list();

    return res.json({ data: customers });
  }

  async getCostumer(req, res) {
    const { id } = req.params
    const customer = await CustomerService.getById(id);

    return res.json({ data: customer });
  }

  async create(req, res) {
    try {
      const payload = {
        ...req.body,
      };

      const sexOptions = ['M', 'F', 'NB'];

      if (!payload.sexo in sexOptions) {
        return res.json({
          message: 'Opção inválida',
        });
      }

      const createdCustomer = await CustomerService.create(payload);

      return res.status(201).json({ data: createdCustomer, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const payload = {
        ...req.body,
      };

      const updatedCustomer = await CustomerService.updateCustomer(id, payload);

      return res
        .status(201)
        .json({ data: updatedCustomer, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await CustomerService.delete(id);

      return res.status(200).json({ message: 'Cliente deletado', status: true});
    } catch (error) {
      return res.status(404).send({ error: error.stack || error, status: false });
    }
  }
}

module.exports = new CustomerController();
