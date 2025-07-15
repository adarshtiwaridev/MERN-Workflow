const express=require("express");
const route=express.Router();

const {signup} =require("../Controllers/Auth");
// route.post("/login",login);
route.post("/signup",signup);

module.exports=route;