const User = require('../models/User');

class Service {
  async createUser(payload) {
    const {nome_usuario, email, senha, tipo_usuario} = payload

    const getUser = await User.findOne({ where: { email } });

    if (getUser) {
      return 'E-mail já registrado.';
    }

    return User.create({nome_usuario, email, senha, tipo_usuario});
  }

  async listUsers() {
    return User.findAll({
      attributes: {
        exclude: ['senha', 'updatedAt', 'createdAt', 'senha_hash'],
      },
    });
  }

  async updateUser(id, payload) {
    const {nome_usuario, email, senha, tipo_usuario } = payload

    const user = await User.findByPk(id);

    return user.update({
      nome_usuario,
      email,
      senha,
      tipo_usuario
    },
    {attributes: {
      exclude: ['senha'],
    }});
  }

  async deleteUser(id) {
    return User.destroy({ where: { id } });
  }

  async validate( email ) {
    return User.findOne({ where: { email }})
  }
}

module.exports = new Service();
