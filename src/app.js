const express = require('express');

const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Habilitando a utilização de json no express
    this.server.use(express.json());
  }

  routes() {
    // Importando rotas
    this.server.use(routes);
  }
}

module.exports = new App().server;
