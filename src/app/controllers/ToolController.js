const Tool = require('../models/Tool');

class ToolController {
  async store(request, response) {
    const tool = await Tool.create(request.body);

    return response.status(201).json(tool);
  }

  async index(request, response) {
    let tools;
    // Checa se há query params
    if (request.query.tag) {
      const { tag } = request.query;

      tools = await Tool.find({
        tags: { $in: tag },
      });

    } else {
      tools = await Tool.find();
    }

    return response.status(tools.length > 0 ? 200 : 204 ).json(tools);
  }

  async destroy(request, response) {
    const { id } = request.params;

    await Tool.deleteOne({ _id: id });

    response.status(204).send();
  }
}

module.exports = new ToolController();
