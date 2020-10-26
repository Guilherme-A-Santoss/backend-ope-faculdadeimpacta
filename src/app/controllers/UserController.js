const UserService = require('../services/user.service');

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
    try {
      const { tipo_usuario } = req.headers;
      const payload = {...req.body, tipo_usuario}

      if (tipo_usuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

      const createdUser = await UserService.createUser(payload);

      return res.status(201).json({ data: createdUser, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { tipo_usuario } = req.headers;
      const payload = {
        ...req.body,
        tipo_usuario
      };

      if (tipo_usuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

      const updatedUser = await UserService.updateUser(id, payload);

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
