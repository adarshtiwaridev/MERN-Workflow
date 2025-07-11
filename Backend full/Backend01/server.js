const express=require('express')
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server run at port no ,3000");
})
app.get("/" ,(req,res)=>{
res.send("hello ji kaise ho")
})
