const UserService = require('../services/user.service');
const Yup = require('yup')

class UserController {
  async listAll(req, res) {
    try {
      const tipoDoUsuario = req.headers.tipo_usuario;

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
      nome_usuario: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6)
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Dados inválidos!', status: false
      })
    }

    try {
      const { tipo_usuario } = req.headers;
      const payload = {...req.body, tipo_usuario}

      if (tipo_usuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

      const createdUser = await UserService.createUser(payload);

      const {id, email, nome_usuario} = createdUser

      return res.status(201).json({ data: {id, email, nome_usuario}, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome_usuario: Yup.string(),
      email: Yup.string().email(),
      senha_antiga: Yup.string().min(6),
      senha: Yup.string().min(6).when('senha_antiga', (senha_antiga, field) =>
        senha_antiga ? field.required() : field
      ),
      confirmar_senha: Yup.string().when('senha', (senha, field) =>
        senha ? field.required().oneOf([Yup.ref('senha')]) : field
      )
    })

    if(!(await schema.isValid(req.body))) {

      return res.status(400).json({
        error: 'Campos faltando!', status: false
      })
    }

    try {
      const { tipo_usuario } = req.headers;
      const payload = {
        ...req.body,
        tipo_usuario
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

  // async login(req, res) {
  //   try {
  //     const { tipo_usuario } = req.headers
  //     const { email } = req.body

  //     if (tipo_usuario !== 'admin') {
  //       return res.status(401).json({ error: 'Usuário não autorizado!' });
  //     }

  //     const user = await UserService.validate(email)

  //     if(!user){
  //       return res.status(404).json({error: 'Usuário não registrado!'})
  //     }
  //   } catch (error) {
  //     return res.status(400).send({ error: error.stack || error, status: false });
  //   }
  // }

}

module.exports = new UserController();
