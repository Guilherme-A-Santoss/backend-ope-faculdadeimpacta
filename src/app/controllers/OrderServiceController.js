const Yup = require('yup')
const OrderService = require('../services/order-service.service')

class OrderServiceController {
  async listOrders(req, res) {
    const orders = await OrderService.listOrders()

    return res.status(200).json({ orders })
  }

  async createServiceOrder(req, res) {
    try {
      const payload = { ...req.body }

      const { userId } = req

      const serviceOrder = await OrderService.createOrder(payload, userId)

      return res.status(201).json({order: serviceOrder})
    } catch (error) {
      return res.status(400).json({error: 'Error'})
    }
  }
}

module.exports = new OrderServiceController()
