import React, { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { user, setuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setuser(null);
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <button onClick={handleLogout} className="logoutBtn">
      {<sup>{user.name}</sup>  }&nbsp;
         <span>logout</span>
      </button>
    </>
  );
}

export default Logout;
