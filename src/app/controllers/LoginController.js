const ValidateUserHelper = require('../helpers/validateUser');

class LoginController {
  async validate(req, res) {
    try {
      const { tipo_usuario } = req.headers;
      const { email } = req.body;

      if (tipo_usuario !== 'admin') {
        return res.status(401).json({ error: 'Usuário não autorizado!' });
      }

      const user = await ValidateUserHelper.userExists({ email });

      if (!user) {
        return res.json({ message: 'Usuário não existe' });
      }

      return res.json({ message: 'Logando...' });
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}

module.exports = new LoginController();
