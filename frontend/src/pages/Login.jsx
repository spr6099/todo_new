import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../baseUrl";

function Login() {
  const navigate = useNavigate();
  const [logdatas, setlogdatas] = useState({ email: "", password: "" });
  const [error, seterror] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setlogdatas({ ...logdatas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!logdatas.email || !logdatas.password) {
      seterror("fill all input fields");
      return;
    }

    try {
      const res = await axios.post(`${url}/login`, logdatas);

      // if (res.status == 200 || res.status === 201) {
      if ([200, 201].includes(res.status)) {
        navigate("/landingPage");
        console.log(res.data);
      } else {
        seterror("login failed,try again later");
      }
    } catch (error) {
      console.error("login error", error.response);
      seterror(error.response?.data?.message || "registration failed");
    }
  };

  return (
    <div>
      <form className="flex-form" onSubmit={handleSubmit}>
        <div>
          <label>Email/ User name</label>
          <input
            type="text"
            name="email"
            placeholder="username/email"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="enter password"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
