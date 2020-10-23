const Service = require('../models/Service');

class ServiceController {
  async index(req, res) {
    const products = await Service.findAll();
    return res.json(products);
  }

  async store(req, res) {
    const { nome, nro_servico, descricao, valor, prazo_dias, tipo } = req.body;

    const service = await Service.create({
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo
    });

    return res.status(201).json(service);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo
    } = req.body;

    const service = await Service.findByPk(id);

    await service.update({
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo
    });

    return res.json(service);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Service.destroy({ where: { id } });

    return res.send();
  }
}

module.exports = new ServiceController();
