const todoModel = require("../models/todo_model");

exports.addTodo = async (req, res) => {
  try {
    const { todo, userId, completed } = req.body;

    if (!todo || !userId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }

    // const userId = req.user.userId;

    const addTodo = new todoModel({ todo, user: userId, completed });
    const result = await addTodo.save();
    return res
      .status(201)
      .json({ success: true, message: "add todo successed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await todoModel.find({ user: id });

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.changeTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await todoModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ message: false, message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await todoModel.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    res.status(200).json({ success: true, message: "delete succesully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
