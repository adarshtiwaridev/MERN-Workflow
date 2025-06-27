import React from "react";
import Templates from "../Components/Templates";
import signupImage from "../assets/Signup.png"

const Signup = ({ setIsLoggedIn }) => {
  return (
   <Templates
  title="Join the Community!"
  des1="Unlock your learning potential with us."
  desc2="Create your account and start your journey today."
  image={signupImage}
  formtype="SignUp"      // <-- Capital S
  setLoggedIn={setIsLoggedIn}
/>

  );
};

export default Signup;
