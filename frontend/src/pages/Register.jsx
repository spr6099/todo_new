import React, { useState } from "react";
import { url } from "../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [datas, setdatas] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdatas({ ...datas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!datas.name || !datas.email || !datas.password) {
      seterror("all fields are required");
      return;
    }

    if (datas.password !== datas.confirmPassword) {
      seterror("password not match");
      return;
    }

    try {
      const res = await axios.post(`${url}/register`, datas);
      navigate("/login");
    } catch (error) {
      seterror(error.response?.data?.message || "registration failed");
    }
  };

  return (
    <div>
      <form className="flex-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
        ></input>
        <label>Mobile number</label>
        <input
          type="number"
          name="number"
          onChange={handleChange}
          placeholder="mobile"
        ></input>
        <label>password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        ></input>
        <label>conform-password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="conform password"
          onChange={handleChange}
        ></input>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
