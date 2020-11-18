const UserService = require('../services/user.service');
const Yup = require('yup')

class UserController {
  async listAll(req, res) {
    try {

      const users = await UserService.listUsers();

      return res.status(200).json({ data: users, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async getUser(req, res) {
    const { id } = req.params
    const user = await UserService.getById(id);

    return res.json({ data: user });
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      nomeUsuario: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6),
      tipoUsuario: Yup.string().oneOf(['admin', 'employee']).required()
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Dados inválidos!', status: false
      })
    }

    try {
      const payload = {...req.body}

      const createdUser = await UserService.createUser(payload);

      const {id, email, nomeUsuario} = createdUser

      return res.status(201).json({ data: {id, email, nomeUsuario}, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nomeUsuario: Yup.string(),
      email: Yup.string().email(),
      senhaAntiga: Yup.string(),
      senha: Yup.string().min(6).when('senhaAntiga', (senhaAntiga, field) =>
        senhaAntiga ? field.required() : field
      ),
      confirmarSenha: Yup.string().when('senha', (senha, field) =>
        senha ? field.required().oneOf([Yup.ref('senha')]) : field
      )
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Campos faltando!', status: false
      })
    }

    try {
      const payload = {
        ...req.body,
      };

      const updatedUser = await UserService.updateUser(req.userId, payload);

      return res.status(201).json({ data: updatedUser, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async updateUserById(req, res) {
    const schema = Yup.object().shape({
      nomeUsuario: Yup.string(),
      tipoUsuario: Yup.string().oneOf(['admin', 'employee']),
      email: Yup.string().email(),
      senhaNova: Yup.string().min(6),
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Campos faltando!', status: false
      })
    }

    try {
      const { id } = req.params

      const payload = {
        ...req.body,
      };

      const updatedUser = await UserService.updateUserById(id, payload);

      return res.status(201).json({ data: updatedUser, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await UserService.deleteUser(id);

      return res.status(200).json({ message: 'Usuário deletado com sucesso', status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }
}

module.exports = new UserController();
