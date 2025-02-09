import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/Authcontext";
import axios from "axios";
import { url } from "../baseUrl";
import TodoList from "./TodoList";
import Todo from "./Todo";

function DisplayTodos() {
  const { user } = useContext(AuthContext);
  const [sort, setsort] = useState("all");
  const [todos, settodos] = useState([]);

  const userId = user?._id;

  const getTodo = async () => {
    if (!userId) {
      console.error("user id missing");
      return;
    }
    try {
      const res = await axios.get(`${url}/todo/getTodo/${userId}`);
      settodos(res.data.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getTodo();
  }, [userId, sort]);

  return (
    <div className="todos">
      <Todo refreshTodo={getTodo} />
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setsort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setsort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setsort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        {todos
          .filter((item) => {
            if (sort === "active") return !item.completed;
            if (sort === "completed") return item.completed;
            return true;
          })
          .map((item) => (
            <TodoList
              key={item._id}
              id={item._id}
              todo={item.todo}
              statusValue={item.completed}
              setTodos={settodos}
              refreshTodo={getTodo}
            />
          ))}
      </ul>

      {/* <ul>
        {sort === "all"
          ? todos
              .map((item) => (
                <TodoList
                  id={item._id}
                  todo={item.todo}
                  statusValue={item.completed}
                  setTodos={settodos}
                  refreshTodo={getTodo}
                />
              ))
          : null}
        {sort === "active"
          ? todos
              .filter((item) => item.completed === false)
              .map((item) => (
                <TodoList
                  id={item._id}
                  todo={item.todo}
                  setTodos={settodos}
                  refreshTodo={getTodo}
                />
              ))
          : null}
        {sort === "completed"
          ? todos
              .filter((item) => item.completed === true)
              .map((item) => (
                <TodoList
                  id={item._id}
                  todo={item.todo}
                  setTodos={settodos}
                  refreshTodo={getTodo}
                />
              ))
          : null}
      </ul> */}
    </div>
  );
}

export default DisplayTodos;
