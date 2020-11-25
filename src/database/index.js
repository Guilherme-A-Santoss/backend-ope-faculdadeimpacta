const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Product = require('../app/models/Product');
const Customer = require('../app/models/Customer');
const Supplier = require('../app/models/Supplier');
const User = require('../app/models/User');
const Service = require('../app/models/Service');
const OrderService = require('../app/models/OrderService')

const models = [Product, Customer, Supplier, User, Service, OrderService];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database();
