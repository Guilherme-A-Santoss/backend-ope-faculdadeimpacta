const User = require('../models/User');

class Service {
  async createUser(payload) {
    const {nomeUsuario, email, senha, tipoUsuario} = payload

    const getUser = await User.findOne({ where: { email } });

    if (getUser) {
      throw 'E-mail já registrado.';
    }

    return User.create({nomeUsuario, email, senha, tipoUsuario});
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
      senhaAntiga,
      tipoUsuario
    } = payload

    const user = await User.findByPk(id);

    if (email !== user.email){
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        throw 'Usuário já existe!'
      }
    }

    if(senhaAntiga && !(await user.checkPassword(senhaAntiga))){
      throw "Senha incorreta!"
    }

    const { nomeUsuario } = await user.update(payload)

    return {id, nomeUsuario, email, tipoUsuario}

  }

  async deleteUser(id) {
    return User.destroy({ where: { id } });
  }

  async validate( email ) {
    return User.findOne({ where: { email }})
  }
}

module.exports = new Service();
