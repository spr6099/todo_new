import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <p>This is landing Page</p>
      Please Login
      <button  onClick={() => navigate("/login")}>go to Login</button>
    </div>
  );
}

export default Landing;
