import React, { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { AuthContext } from "../../context/Authcontext";
import { url } from "../baseUrl";
import axios from "axios";

function Todo({ refreshTodo }) {
  const [todo, settodo] = useState("");

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const add = async () => {
    if (!todo.trim()) {
      alert("Todo is empty");
      return;
    }
    try {
      const res = await axios.post(`${url}/todo/addTodo`, {
        todo: todo,
        user: user?._id,
        completed: false,
      });
      if (res.status >= 200 && res.status < 300) {
        settodo("");
        refreshTodo();
        
      } else {
        alert("error in add todo");
      }
    } catch (err) {
      console.error("Error in adding todo", err.response?.data || err.message);
      alert("failed to add todo,try again");
    }
  };
  return (
    <div className="addTodo">
      <input type="text" value={todo} onChange={handleChange}></input>
      <button className="addBtn" type="submit" onClick={add}>
        <GoPlus />
      </button>
    </div>
  );
}

export default Todo;
