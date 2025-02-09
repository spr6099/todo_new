import React from "react";

import { motion } from "framer-motion";
import DisplayTodos from "../components/DisplayTodos";
import Logout from "../components/Logout";

function TodoHome() {
  return (
    <div className="todoHome">
      <div className="logout">
        <Logout />
      </div>{" "}
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      
      <DisplayTodos />
    </div>
  );
}

export default TodoHome;
