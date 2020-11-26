const OrderService = require('../models/OrderService')

class Service {
  constructor(){
    //initialize the items in queue
    this.orderSchedule = []
  }


  async enqueue(){
    this.orderSchedule = []

    const orders = await OrderService.findAll({ where: { statusOs: 'pendente' }})

    for(const orderIndex in orders){
      this.orderSchedule.push(orders[orderIndex])
    }

    return this.orderSchedule;
  }

  dequeue(count=1){
    //pull out the first item from the queue
    this.orderSchedule.splice(0,count);
    return this._items;
  }

  peek(){
    //peek at the first item from the queue
    return this._items[0]
  }

  size(){
    //get the length of queue
    return this._items.length
  }

  isEmpty(){
    //find whether the queue is empty or no
    return this._items.length===0
  }
}

module.exports = new Service()
