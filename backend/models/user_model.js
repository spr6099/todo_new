const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: [true, "Enter email"], unique: true },
  number: { type: Number },
  password: { type: String, minLength: 6 },
});

module.exports = new mongoose.model("Users", registerSchema);
