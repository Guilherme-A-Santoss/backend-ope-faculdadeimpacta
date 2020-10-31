const ServiceModel = require('../models/Service');

class Service {
  async create(payload) {
    const {
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      tipo,
    } = payload

    return ServiceModel.create({
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      tipo,
    });
  }

  async list() {
    return ServiceModel.findAll();
  }

  async getById(id) {
    return ServiceModel.findByPk(id);
  }

  async update(id, payload) {
    const {
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      tipo,
    } = payload

    const service = await ServiceModel.findByPk(id);

    await service.update({
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      tipo,
    });
  }

  async delete(id) {
    return ServiceModel.destroy({ where: { id } });
  }
}

module.exports = new Service();
