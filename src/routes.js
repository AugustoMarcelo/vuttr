const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.status(200).send({ message: 'Success' });
});

// GET /tools
// GET /tools?tag=

// POST /tools

// DELETE /tools/:id

module.exports = routes;
