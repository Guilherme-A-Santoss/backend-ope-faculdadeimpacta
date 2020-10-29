const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Product = require('../app/models/Product');
const Customer = require('../app/models/Customer');
const Supplier = require('../app/models/Supplier');
const User = require('../app/models/User');
const Servico = require('../app/models/Service');

const models = [Product, Customer, Supplier, User, Servico];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
