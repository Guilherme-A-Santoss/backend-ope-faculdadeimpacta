const Costumer = require('../models/Costumer');

class CostumerController {
  async index(req, res) {
    const costumers = await Costumer.findAll();

    return res.json({ data: costumers });
  }

  async store(req, res) {
    const {
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
    } = req.body;

    const costumer = await Costumer.create({
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
    });

    return res.status(201).json({ data: costumer });
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
    } = req.body;

    const costumer = await Costumer.findByPk(id);

    await costumer.update({
      cpf,
      nome,
      dataNascimento,
      endereco,
      cidade,
      uf,
      telefone,
      email,
    });

    return res.json(costumer);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Costumer.destroy({ where: { id } });

    return res.send();
  }
}

module.exports = new CostumerController();
