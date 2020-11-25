const OrderService = require('../models/OrderService')

class Service {
  async createOrder(payload, userId) {
    const { idCliente } = payload

    return OrderService.create({
      id_cliente: idCliente,
      id_funcionario: userId,
      statusOs: 'pendente',
      ...payload
    });
  }

  async listOrders() {
    return OrderService.findAll()
  }

  async getOrderById(id) {
    return OrderService.findByPk(id)
  }

  async updateOrder(id, payload) {
    const order = await OrderService.findByPk( id )

    if (!order) throw 'Ordem não encontrada!'

    await order.update({ ...payload })

    return order
  }

  async cancelOrder(id) {
    const order = await OrderService.findByPk(id)

    return order.update({ statusOs: 'cancelada'});
  }

  async deleteOrder(id) {
    return OrderService.destroy({ where: { id } });
  }
}

module.exports = new Service()
