import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./Slices/cartslice";


export const store=configureStore({
    reducer:{
        cart:cartslice
    }

})