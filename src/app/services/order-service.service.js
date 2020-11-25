const OrderService = require('../models/OrderService')

class Service {
  async createOrder(payload, userId) {
    const { idCliente } = payload

    return OrderService.create({
      id_cliente: idCliente,
      id_funcionario: userId,
      ...payload
    });
  }

  async listOrders() {
    return OrderService.findAll()
  }

  async updateOrder(id, payload) {
    const order = await OrderService.findByPk( id )

    if (!order) throw 'Ordem não encontrada!'

    await order.update({ ...payload })

    return order
  }

  async deleteOrder(id) {
    const order = await OrderService.findByPk(id)

    await order.update({ statusOs: 'cancelada'});

    return order
  }
}

module.exports = new Service()
