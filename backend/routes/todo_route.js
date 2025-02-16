const router = require("express").Router();
const authenticateToken = require("../middleware/AuthenticateToken");

const {
  addTodo,
  getTodo,
  changeTodo,
  deleteTodo,
} = require("../controller/todo_controller");

router.post("/addTodo",authenticateToken, addTodo);
router.get("/getTodo/:id", getTodo);
router.post("/changeTodo/:id", changeTodo);
router.post("/deleteTodo/:id", deleteTodo);

module.exports = router;
