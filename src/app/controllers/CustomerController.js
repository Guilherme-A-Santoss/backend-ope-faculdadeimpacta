const Yup = require('yup')
const CustomerService = require('../services/customer.service');

class CustomerController {
  async listAll(req, res) {
    const customers = await CustomerService.list();

    return res.json({ data: customers });
  }

  async getCostumer(req, res) {
    const { id } = req.params
    const customer = await CustomerService.getById(id);

    return res.json({ data: customer });
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      cpf: Yup.string().length(11).required(),
      nome: Yup.string().max(50).required(),
      dataNascimento: Yup.date().required(),
      endereco: Yup.string().max(50).required(),
      cidade: Yup.string().max(30).required(),
      uf: Yup.string().length(2).required(),
      telefone: Yup.string().min(8).max(11).required(),
      email: Yup.string().email().required(),
      sexo: Yup.string().oneOf(['M', 'F', 'NB']).required()
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Dados inválidos, por favor tente novamente!', status: false
      })
    }

    try {
      const payload = {
        ...req.body,
      };

      const createdCustomer = await CustomerService.create(payload);

      return res.status(201).json({ data: createdCustomer, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      cpf: Yup.string().length(11).required(),
      nome: Yup.string().max(50).required(),
      dataNascimento: Yup.date().required(),
      endereco: Yup.string().max(50).required(),
      cidade: Yup.string().max(30).required(),
      uf: Yup.string().length(2).required(),
      telefone: Yup.string().min(8).max(11).required(),
      email: Yup.string().email().required(),
      sexo: Yup.string().oneOf(['M', 'F', 'NB']).required()
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Dados inválidos, por favor tente novamente!', status: false
      })
    }

    try {
      const { id } = req.params;
      const payload = {
        ...req.body,
      };

      const updatedCustomer = await CustomerService.update(id, payload);

      return res
        .status(201)
        .json({ data: updatedCustomer, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await CustomerService.delete(id);

      return res.status(200).json({ message: 'Cliente deletado', status: true});
    } catch (error) {
      return res.status(404).send({ error: error.stack || error, status: false });
    }
  }
}

module.exports = new CustomerController();
