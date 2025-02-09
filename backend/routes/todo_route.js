const router = require("express").Router();

const {
  addTodo,
  getTodo,
  changeTodo,
  deleteTodo,
} = require("../controller/todo_controller");

router.post("/addTodo", addTodo);
router.get("/getTodo/:id", getTodo);
router.post("/changeTodo/:id", changeTodo);
router.post("/deleteTodo/:id", deleteTodo);

module.exports = router;
