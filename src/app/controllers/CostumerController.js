const CostumerService = require('../services/costumer.service');

class CostumerController {
  async listAll(req, res) {
    const costumers = await CostumerService.list();

    return res.json({ data: costumers });
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

      const createdCostumer = await CostumerService.create(payload);

      return res.status(201).json({ data: createdCostumer, status: true });
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

      const updatedCostumer = await CostumerService.updateCostumer(id, payload);

      return res
        .status(201)
        .json({ data: updatedCostumer, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await CostumerService.delete(id);

      return res.status(200).json({ message: 'Cliente deletado', status: true});
    } catch (error) {
      return res.status(404).send({ error: error.stack || error, status: false });
    }
  }
}

module.exports = new CostumerController();
