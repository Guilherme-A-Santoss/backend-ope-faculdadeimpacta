const Product = require('../models/Product');

class Service {
  async create(payload) {
    const {
      nome,
      marca,
      preco,
      cod_barras
    } = payload

    return Product.create({
      nome,
      marca,
      preco,
      cod_barras
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
      cod_barras
    } = payload

    const product = await Product.findByPk(id);

    await product.update({
      nome,
      marca,
      preco,
      cod_barras
    });
  }

  async delete(id) {
    return Product.destroy({ where: { id } });
  }
}

module.exports = new Service();
