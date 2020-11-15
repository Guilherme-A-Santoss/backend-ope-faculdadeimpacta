const ServiceModel = require('../models/Service');

class Service {
  async create(payload) {
    return ServiceModel.create({ ...payload });
  }

  async list() {
    return ServiceModel.findAll();
  }

  async getById(id) {
    return ServiceModel.findByPk(id);
  }

  async update(id, payload) {

    const service = await ServiceModel.findByPk(id);

    await service.update({ ...payload });
  }

  async delete(id) {
    return ServiceModel.destroy({ where: { id } });
  }
}

module.exports = new Service();
