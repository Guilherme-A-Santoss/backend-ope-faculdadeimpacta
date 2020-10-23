const User = require('../models/User');

class ValidateUser {
  async userExists({ email }) {
    try {
      const user = await User.findOne({ where: { email } });
      return user

    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = new ValidateUser()
