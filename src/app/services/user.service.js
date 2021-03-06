const User = require('../models/User');

class Service {
  async createUser(payload) {
    const {nomeUsuario, email, senha, tipoUsuario} = payload

    const getUser = await User.findOne({ where: { email } });

    if (getUser) {
      throw 'E-mail já registrado.';
    }

    return User.create({nomeUsuario, email, senha, tipoUsuario });
  }

  async listUsers() {

    return User.findAll({
      order: [["nomeUsuario", "ASC"]],
      attributes: {
        exclude: [, 'updatedAt', 'createdAt', 'senhaHash'],
      },
    });
  }

  async getById(id) {
    const user =  await User.findByPk(id);

    const { email, nomeUsuario, tipoUsuario } = user

    return { id, email, nomeUsuario, tipoUsuario }
  }

  async updateUser(id, payload) {
    const {
      senhaAntiga,
      tipoUsuario
    } = payload

    let { email } = payload

    const user = await User.findByPk(id);

    email = email ? email : user.email

    if (email !== user.email){
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        throw 'Usuário já existe!'
      }
    }

    if(senhaAntiga && !(await user.checkPassword(senhaAntiga))){
      throw "Senha incorreta!"
    }

    const { nomeUsuario } = await user.update({ ...payload, email })

    return {id, nomeUsuario, email, tipoUsuario}
  }

  async updateUserById(id, payload) {
    const { senhaNova, tipoUsuario, email } = payload

    const user = await User.findByPk(id);

    if (email !== user.email){
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        throw 'Usuário já existe!'
      }
    }

    const { nomeUsuario } = await user.update({ ...payload, senha: senhaNova })

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
