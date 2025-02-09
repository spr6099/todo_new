import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

function UserLayout() {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserLayout;
