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
}

module.exports = new Service()
