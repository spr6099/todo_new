const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  todo: { type: String, required: true },
  completed: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = new mongoose.model("Todos", todoSchema);
