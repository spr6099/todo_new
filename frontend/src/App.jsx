import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoHome from "./pages/TodoHome";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import NotFound from "./pages/NotFound";
import UserLayout from "../layout/UserLayout";

function App() {
  const [user, setuser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("user")) || null;
  });

  // useEffect(() => {
  //   setuser(JSON.parse(sessionStorage.getItem("user")));
  // }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setuser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/TodoHome" element={<UserLayout />}>
              <Route index element={<TodoHome />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
