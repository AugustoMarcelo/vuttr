const express = require('express');

const ToolController = require('./app/controllers/ToolController');

const routes = express.Router();

// Create tool route
routes.post('/tools', ToolController.store);
// List tool route
routes.get('/tools', ToolController.index);
// Delete tool route
routes.delete('/tools/:id', ToolController.destroy);

module.exports = routes;
