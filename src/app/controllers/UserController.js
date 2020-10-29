const UserService = require('../services/user.service');
const Yup = require('yup')

class UserController {
  async listAll(req, res) {
    try {
      const tipoDoUsuario = req.headers.tipoUsuario;

      if (tipoDoUsuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

      const users = await UserService.listUsers();

      return res.status(200).json({ data: users, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      nomeUsuario: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6)
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Dados inválidos!', status: false
      })
    }

    try {
      const { tipoUsuario } = req.headers;
      const payload = {...req.body, tipoUsuario}

      if (tipoUsuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

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
      senhaAntiga: Yup.string().min(6),
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
      const { tipoUsuario } = req.headers;
      const payload = {
        ...req.body,
        tipoUsuario
      };

      const updatedUser = await UserService.updateUser(req.userId, payload);

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
