const ServiceModel = require('../models/Service');

class Service {
  async create(payload) {
    const {
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      categoria,
    } = payload

    return ServiceModel.create({
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      categoria,
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
      categoria,
    } = payload

    const service = await ServiceModel.findByPk(id);

    await service.update({
      nome,
      nroServico,
      descricao,
      valor,
      prazoDias,
      categoria,
    });
  }

  async delete(id) {
    return ServiceModel.destroy({ where: { id } });
  }
}

module.exports = new Service();
