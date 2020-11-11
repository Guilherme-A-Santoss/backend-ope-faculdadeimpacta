const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()

async function incryptePassword(password) {
  return bcrypt.hash(password, 8)
}
module.exports = {
  up: async (queryInterface) => await queryInterface.bulkInsert('User',
    [
      {
        nome_usuario: 'Tester',
        email: 'admin@admin.com',
        senha_hash: await incryptePassword(process.env.SUPER_USER_PASSWORD),
        tipo_usuario: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {}),

  down: async (queryInterface) => await queryInterface.bulkDelete('User', null, {}),
};
