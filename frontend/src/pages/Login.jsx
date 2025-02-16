import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../baseUrl";
import "../style/login.css";

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
        const { user, jwtToken } = res.data;
        // console.log(jwtToken);

        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("jwtToken", JSON.stringify(jwtToken));
        navigate("/TodoHome");

        window.location.reload();
      } else {
        seterror("login failed,try again later");
      }
    } catch (error) {
      console.error("login error", error.response);
      seterror(error.response?.data?.message || "registration failed");
    }
  };

  return (
    <div className=".login">
      {/* <form classNameName="flex-form" onSubmit={handleSubmit}>
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
      </form> */}

      <section>
        {" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>

            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <i>Email</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <i>Password</i>
              </div>

              <div className="links">
                {" "}
                <a href="#">Forgot Password</a>{" "}
                <a onClick={() => navigate("/register")}>Signup</a>
              </div>

              <div className="inputBox">
                {error && <p>{error}</p>}
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
