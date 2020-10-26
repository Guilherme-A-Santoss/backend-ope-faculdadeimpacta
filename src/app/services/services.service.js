const ServiceModel = require('../models/Service');

class Service {
  async create(payload) {
    const {
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo,
    } = payload

    return ServiceModel.create({
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo,
    });
  }

  async list() {
    return ServiceModel.findAll();
  }

  async update(id, payload) {
    const {
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo,
    } = payload

    const service = await ServiceModel.findByPk(id);

    await service.update({
      nome,
      nro_servico,
      descricao,
      valor,
      prazo_dias,
      tipo,
    });
  }

  async delete(id) {
    return ServiceModel.destroy({ where: { id } });
  }
}

module.exports = new Service();
