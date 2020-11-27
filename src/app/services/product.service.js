const Product = require('../models/Product');

class Service {
  async create(payload) {
    return Product.create({
      ...payload
    });
  }

  async list() {
    return Product.findAll({ order: [["nome", "ASC"]] });
  }

  async getById(id) {
    return Product.findByPk(id);
  }

  async update(id, payload) {
    const {
      nome,
      marca,
      preco,
      codBarras
    } = payload

    const product = await Product.findByPk(id);

    await product.update({
      nome,
      marca,
      preco,
      codBarras
    });
  }

  async delete(id) {
    return Product.destroy({ where: { id } });
  }
}

module.exports = new Service();
