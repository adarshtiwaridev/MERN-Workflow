import React, { useState } from "react";

const Formdata = () => {
  const [formvalue, setformvalue] = useState({
    name: "",
    class: "",
    password: "",
  });

  function submithandler(e) {
     e.preventDefault(); //
    console.log(formvalue);
  }
  function changehandler(e) {
    const {name,value}=e.target;
     setformvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  return (
    <div>
      <form onSubmit={submithandler} className="w-fit flex flex-col ">
        <label htmlFor="name"> name</label>
        <input
          type="text"
          name="name"
          value={formvalue.name}
          id="name"
           onChange={ changehandler}
          placeholder="enter youe name "
          className="border-4"
        />
        <label htmlFor="Class"> Class</label>
        <input type="number" name="class" id="class" value={formvalue.class} className="border-4"  onChange={ changehandler}/>
        <label htmlFor="password"> password</label>
        <input type="password" id="password"  name="Password"  onChange={ changehandler}/>
        <button className="w-[90px] border-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formdata;
