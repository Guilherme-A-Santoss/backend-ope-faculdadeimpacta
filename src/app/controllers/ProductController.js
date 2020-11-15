const Yup = require('yup')
const ProductService = require('../services/product.service')

class ProductController {
  async listAll(req, res) {
    try {
      const products = await ProductService.list()

      return res.status(201).json({ data: products, status: true })
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }

  async getProduct(req, res) {
    const { id } = req.params
    const product = await ProductService.getById(id);

    return res.json({ data: product });
  }

  async create(req, res) {

    const schema = Yup.object().shape({
      nome: Yup.string().max(50).required(),
      marca: Yup.string().max(20).required(),
      preco: Yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*\.{1}\d*$/),
      ).required(),
      codBarras: Yup.string().max(20).required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Campos inválidos!', status: false})
    }

    try {
      const payload = { ...req.body }

      const createdProduct = await ProductService.create(payload);

      return res.status(201).json({ data: createdProduct, status: true })
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().max(50),
      marca: Yup.string().max(20),
      preco: Yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*\.{1}\d*$/),
      ).required(),
      codBarras: Yup.string().max(20)
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Campos inválidos!', status: false})
    }

    try {
      const { id } = req.params;
      const payload = { ...req.body }

      const updatedProduct = await ProductService.update(id, payload)

      return res.status(201).json({ data: updatedProduct, status: true })
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await ProductService.delete(id);

      return res.status(200).json({ message: 'Produto deletado', status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }
}

module.exports = new ProductController();
