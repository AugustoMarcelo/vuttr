const Tool = require('../models/Tool');

class ToolController {
  async store(request, response) {
    const tool = await Tool.create(request.body);

    return response.json(tool);
  }
}

module.exports = new ToolController();
