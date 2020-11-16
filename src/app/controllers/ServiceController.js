const Yup = require('yup')
const ServicesService = require('../services/services.service')

class ServiceController {
  async listAll(req, res) {
    try {
      const services = await ServicesService.list();
      return res.status(200).json({ data: services, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async getService(req, res) {
    const { id } = req.params
    const customers = await ServicesService.getById(id);

    return res.json({ data: customers });
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      nroServico: Yup.string().required(),
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      valor: Yup.number().required(),
      prazoDias: Yup.number().integer().required(),
      categoria: Yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: "Campos inválidos", status: false });
    }

    try {
      const payload = {...req.body}

      const createdService = await ServicesService.create(payload);

      return res.status(200).json({ data: createdService, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      valor: Yup.number().required(),
      prazoDias: Yup.number().integer().required(),
      categoria: Yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: "Campos inválidos ou vazios!", status: false });
    }

    try {
      const { id } = req.params;
      const payload = {...req.body}

      const updatedService = await ServicesService.update(id, payload)

      return res.status(200).json({ data: updatedService, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await ServicesService.delete(id);

      return res.status(200).json({ message: 'Serviço deletado com sucesso', status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }
}

module.exports = new ServiceController();
