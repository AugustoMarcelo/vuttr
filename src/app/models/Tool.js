const { Schema, model } = require('mongoose');

const ToolSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true, // Cria automaticamente createAt e updateAt
  }
);

module.exports = model('Tool', ToolSchema);
