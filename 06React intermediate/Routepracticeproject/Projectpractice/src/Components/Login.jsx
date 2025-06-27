import React from "react";
import Templates from "../Components/Templates";
import logginimage from "../assets/login.png";

const Login = ({ setLoggedin }) => {
  return (
    <Templates
      title="Welcome Back"
      desc1="Build skills for today"
      desc2="Education is the future"
      image={logginimage}
      formtype="login"

      setLoggedin={setLoggedin}
    />
  );
};

export default Login;
