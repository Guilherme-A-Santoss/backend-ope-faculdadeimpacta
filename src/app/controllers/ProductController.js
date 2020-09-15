import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll()

    return res.json(products)
  }

  async store(req, res) {

    const { nome, marca, preco, cod_barras } = req.body;

    const product = await Product.create({
      nome,
      marca,
      preco,
      cod_barras,
    });

    return res.status(201).json(product);
  }

  async update(req, res) {
    const { id } = req.params
    const { nome, marca, preco, cod_barras } = req.body

    const product = await Product.findByPk(id)

    await product.update({ nome, marca, preco, cod_barras })

    return res.json(product)

  }

  async destroy(req, res) {
    const { id } = req.params

    await Product.destroy({ where: { id } })

    return res.send()
  }

}

export default new ProductController();
