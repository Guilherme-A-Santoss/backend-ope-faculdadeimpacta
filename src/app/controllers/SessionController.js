const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
class SessionController {
  async login(req, res){
    try {
      const { email, senha } = req.body

      const user = await UserService.validate(email)

      if (!user) {
        return res.status(401).json({error: 'Usuário não existe!', status: false})
      }

      if (!(await user.checkPassword(senha))) {
        return res.status(401).json({error: 'Senha incorreta!', status: false})
      }

      const { id, nome_usuario } = user

      return res.status(200).json({
        user: {
          id,
          email,
          nome_usuario
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        }),
        status: true
      })

    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }
}

module.exports = new SessionController()
