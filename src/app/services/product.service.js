const Product = require('../models/Product');

class Service {
  async create(payload) {
    const {
      nome,
      marca,
      preco,
      codBarras
    } = payload

    return Product.create({
      nome,
      marca,
      preco,
      codBarras
    });
  }

  async list() {
    return Product.findAll();
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
