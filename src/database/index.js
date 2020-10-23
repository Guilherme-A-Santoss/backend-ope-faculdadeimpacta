const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Product = require('../app/models/Product');
const Costumer = require('../app/models/Costumer');
const Supplier = require('../app/models/Supplier');
const User = require('../app/models/User');
const Servico = require('../app/models/Service');

const models = [Product, Costumer, Supplier, User, Servico];

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
