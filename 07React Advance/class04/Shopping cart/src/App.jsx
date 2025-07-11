import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Home from "./Pages/Home"
import Cart from "./Pages/cart"
import Navbaar from './Components/Navbaar';
import { Route ,Routes   } from 'react-router-dom';
const App = () => {
  return (
    <div className="">
    <div>
<Navbaar/>


  <ToastContainer />
    </div>

   <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
   </Routes>

</div>
  )
}

export default App
