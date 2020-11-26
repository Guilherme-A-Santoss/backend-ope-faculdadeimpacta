const OrderQueueService = require('../services/orderQueue.service')

class OrderScheduleController {
  async enqueueOrders(req, res) {
    const ordersQueued = await OrderQueueService.enqueue()

    return res.json({ data: ordersQueued})
  }
}

module.exports = new OrderScheduleController()
