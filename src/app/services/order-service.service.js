const User = require('../models/User')
const OrderService = require('../models/OrderService')

const { Op } = require('sequelize');
const moment = require('moment')

class Service {
  async createOrder(payload) {
    return OrderService.create({
      statusOs: 'pendente',
      ...payload
    });
  }

  async listOrders(id) {
    const today = `${moment().endOf('day').format('YYYY-MM-DDTHH:mm:ss')}.000Z`

    const user = await User.findByPk(id)

    if (user.tipoUsuario === 'admin') {
      return OrderService.findAll()
    }

    return OrderService.findAll({ where: {
      idFuncionario: id,
      statusOs: {
        [Op.or]: ['pendente', 'iniciada', 'concluida']
      }
    } })

  }

  async getOrderById(id) {
    return OrderService.findByPk(id)
  }

  async updateOrder(payload, id) {
    const order = await OrderService.findByPk(id)

    if (!order) throw 'Ordem não encontrada!'

    await order.update({ ...payload })

    return order
  }

  async cancelOrder(id, statusOs) {
    const order = await OrderService.findByPk(id)

    return order.update({ statusOs });
  }

  async deleteOrder(id) {
    return OrderService.destroy({ where: { id } });
  }
}

module.exports = new Service()
