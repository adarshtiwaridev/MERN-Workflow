import React, { useState, useContext } from 'react';
import UserContext from '../Context/usercontext';

const Login = () => {
  const [formdata, setform] = useState({
    username: "",
    password: ""
  });

  const { setUser } = useContext(UserContext);

  function changeHandler(e) {
    setform((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value
    }));
  }

  function submitHandle(e) {
    e.preventDefault();
    console.log(formdata);
    setUser(formdata);
  }

  return (
   <div className=" flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
  <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
    <form onSubmit={submitHandle} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formdata.username}
        onChange={changeHandler}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formdata.password}
        onChange={changeHandler}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;
