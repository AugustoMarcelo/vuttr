const express = require('express');

const routes = require('./routes');

const server = express();

// Habilitando a utilização de json no express
server.use(express.json());
// Importando rotas
server.use(routes);

server.listen(3000);
