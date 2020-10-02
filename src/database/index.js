import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Product from '../app/models/Product';
import Costumer from '../app/models/Costumer';
import Supplier from '../app/models/Supplier';

const models = [Product, Costumer, Supplier];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
