const express = require('express');

const ToolController = require('./app/controllers/ToolController');

const routes = express.Router();

// GET /tools
// GET /tools?tag=

routes.post('/tools', ToolController.store);

// DELETE /tools/:id

module.exports = routes;
