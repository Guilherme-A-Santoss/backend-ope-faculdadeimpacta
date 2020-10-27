const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const auth = require('../../config/auth')

class SessionController {
  async init(req, res){
    try {
      const { email, senha } = req.body

      const user = await UserService.validate(email)

      if (!user) {
        return res.status(401).json({error: 'Usuário não existe!'})
      }

      if (!(await user.checkPassword(senha))) {
        return res.status(401).json({error: 'Senha incorreta!'})
      }

      const { id, nome } = user

      return res.status(200).json({
        user: {
          id,
          email,
          nome
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        })
      })

    } catch (error) {

    }
  }
}

module.exports = new SessionController()
