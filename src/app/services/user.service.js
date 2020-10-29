const User = require('../models/User');

class Service {
  async createUser(payload) {
    const {nome_usuario, email, senha, tipo_usuario} = payload

    const getUser = await User.findOne({ where: { email } });

    if (getUser) {
      throw 'E-mail já registrado.';
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
    const {
      email,
      senha_antiga,
      tipo_usuario
    } = payload

    const user = await User.findByPk(id);

    if (email !== user.email){
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        throw 'Usuário já existe!'
      }
    }

    if(senha_antiga && !(await user.checkPassword(senha_antiga))){
      throw "Senha incorreta!"
    }

    const { nome_usuario } = await user.update(payload)

    return {id, nome_usuario, email, tipo_usuario}

  }

  async deleteUser(id) {
    return User.destroy({ where: { id } });
  }

  async validate( email ) {
    return User.findOne({ where: { email }})
  }
}

module.exports = new Service();
