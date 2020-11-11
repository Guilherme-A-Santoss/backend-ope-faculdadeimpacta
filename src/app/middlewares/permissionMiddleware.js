const UserService = require('../services/user.service')

module.exports = async (req, res, next) => {
  const { userId } = req
  const user = await UserService.getById(userId)

  if (user.tipoUsuario !== 'admin') {
    return res.status(403).json({ error: 'Usuário não autorizado', status: false })
  }

  try {
    return next()
  } catch (error) {
    return res.status(400).send({ error: error.stack || error });
  }
}
