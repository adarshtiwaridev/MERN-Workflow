import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbaar from "./Components/Navbaar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import ServicesPage from "./Components/ServicesPage";
import Dashbord from "./Components/Dashbord"; // ✅ Optional: Rename to Dashboard.js for better naming.
import PricingPage from "./Components/PricingPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (

    <div>
      <Navbaar islogin={isLogin} setLoggedin={setIsLogin} />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ServicesPage" element={<ServicesPage/>}/>
        <Route path="/PricingPage" element={<PricingPage/>}/>
<Route path="/About" element ={<About/>}/>
       <Route path="/ContactForm" element={<ContactForm/>}/>
        <Route path="/Login" element={<Login setLoggedin={setIsLogin} />} />
        <Route path="/Signup" element={<Signup setLoggedin={setIsLogin} />} />
        <Route path="/Dashboard" element={<Dashbord />} />
      </Routes>
    </div>
  );
};

export default App;
