const User = require('../models/User');

class UserController {
  async index(req, res) {
    try {
      const tipoDoUsuario = req.headers.tipo_usuario

      if (tipoDoUsuario !== 'admin'){
        return res.status(401).json({ error: 'Usuário não autorizado!'})
      }

      const user = await User.findAll();

      return res.json(user);
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }

  async store(req, res) {
    try {
      const { nome_usuario, email, senha } = req.body;
      const { tipo_usuario } = req.headers

      const user = await User.create({
        nome_usuario,
        email,
        senha,
        tipo_usuario,
      });

      return res.status(201).json(user);

    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { nome_usuario, email, senha } = req.body;
    const { tipo_usuario } = req.headers

    if (tipo_usuario !== 'admin'){
      return res.status(401).json({ error: 'Usuário não autorizado!'})
    }

    const user = await User.findByPk(id);

    await user.update({ nome_usuario, email, senha, tipo_usuario });

    return res.json(user);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await User.destroy({ where: { id } });

    return res.send();
  }
}

module.exports = new UserController();
