import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import axios from "axios";
import { url } from "../baseUrl";

function TodoList({ id, todo, statusValue, setTodos, refreshTodo }) {
  const inputRef = useRef(true);
  const [isDisabled, setisDisabled] = useState(true);

  const statusChange = async () => {
    const data = {
      completed: true,
    };

    try {
      const res = await axios.post(`${url}/todo/changeTodo/${id}`, data);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t._id === id ? { ...t, completed: true } : t))
      );
      refreshTodo();
    } catch (error) {
      console.log("update Todo Error", error.response);
    }
  };

  const deleteTodo = async () => {
    try {
      const res = await axios.post(`${url}/todo/deleteTodo/${id}`);
      if (res.status === 200) {
        refreshTodo();
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      console.log("delete todo error", error.response);
    }
  };

  const editTodo = async (id, value, e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setisDisabled(true);

      const data = {
        todo: inputRef.current.value,
      };
      try {
        const res = await axios.post(`${url}/todo/changeTodo/${id}`, data);

        refreshTodo();
      } catch (error) {
        console.log("update Todo Error", error.response);
      }
    }
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={isDisabled}
        defaultValue={todo}
        onKeyDown={(e) => editTodo(id, inputRef.current.value, e)}
      />
      <div className="todoButtons">
        {statusValue === false && (
          <>
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setisDisabled(!isDisabled)}
            >
              <AiFillEdit />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: "green" }}
              value={statusValue}
              onClick={() => statusChange()}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          </>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => deleteTodo()}
        >
          <IoClose />
        </motion.button>
      </div>
      {statusValue && <span className="done">done</span>}
    </motion.li>
  );
}

export default TodoList;
