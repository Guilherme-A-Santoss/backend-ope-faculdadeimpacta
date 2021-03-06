const Yup = require('yup')
const OrderService = require('../services/order-service.service')

class OrderServiceController {
  async listOrders(req, res) {
    const { userId } = req

    const orders = await OrderService.listOrders(userId)

    return res.status(200).json({ orders })
  }

  async listOrderById(req, res) {
    const { id } = req.params
    const order = await OrderService.getOrderById(id)

    return res.status(200).json({ order })
  }

  async createServiceOrder(req, res) {
    const schema = Yup.object().shape({
      dataEntrega: Yup.date().required(),
      descricao: Yup.string().max(200).required(),
      valor: Yup.number().required(),
      itemsServico: Yup.string().required(),
      categoria: Yup.string().required(),
      idCliente: Yup.number().integer().required(),
      idFuncionario: Yup.number().integer().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Campos faltando!"})
    }

    try {
      const payload = { ...req.body }

      const serviceOrder = await OrderService.createOrder(payload)

      return res.status(201).json({order: serviceOrder, status: true})
    } catch (error) {
      return res.status(400).json({error: error.stack || error.message || error, status: false })
    }
  }

  async updateOrderService(req, res) {
    const schema = Yup.object().shape({
      dataEntrega: Yup.date(),
      statusOs: Yup.string().oneOf(['pendente', 'iniciada', 'concluida']).required(),
      descricao: Yup.string().max(200).required(),
      valor: Yup.number().required(),
      itemsServico: Yup.string(),
      categoria: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Campos faltando!"})
    }

    try {
      const payload = { ...req.body }
      const { id } = req.params

      const updatedOrder = await OrderService.updateOrder(payload, id)

      return res.status(201).json({order: updatedOrder, status: true})
    } catch (error) {
      return res.status(400).json({error: error.stack || error.message || error, status: false })
    }
  }

  async cancel(req, res) {
    try {
      const { id } = req.params;

      const statusOs = 'cancelada'

      const orderCanceled = await OrderService.cancelOrder(id, statusOs );

      return res.status(200).json({ message: orderCanceled, status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await OrderService.deleteOrder(id);

      return res.status(200).json({ message: 'Ordem de serviço deletada com sucesso.', status: true });
    } catch (error) {
      return res.status(400).send({ error: error.stack || error, status: false});
    }
  }
}

module.exports = new OrderServiceController()
