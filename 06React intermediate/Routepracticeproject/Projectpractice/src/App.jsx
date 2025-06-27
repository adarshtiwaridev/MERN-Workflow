import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbaar from "./Components/Navbaar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashbord from "./Components/Dashbord"; // ✅ Optional: Rename to Dashboard.js for better naming.

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Navbaar islogin={isLogin} setLoggedin={setIsLogin} />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashbord />} />
      </Routes>
    </div>
  );
};

export default App;
