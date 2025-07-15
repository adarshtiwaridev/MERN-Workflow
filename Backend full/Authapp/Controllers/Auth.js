    const bcrypt = require('bcrypt');
    const User=require("../Models/Userschema")

    // singnup route handler
    exports.signup=async ( req,res) => {
         try {
             const { name, email, password ,confirmpassword,role } = req.body;
             const existinguser=await User.findOne({email});
             if (existinguser) {
return res.status(400).json({
    success:false,
    message:"email already exists "
});
  
let hashpassword;
let hashconfirmpassword;
   try{
    hashpassword=await bcrypt.hash(password,10);
    hashconfirmpassword=await bcrypt.hash(confirmpassword,10);
   }
catch(error){
    return req.status(500).json({
        success:false,
        message:"Errror in  hashing password "
    });
}
// crete  a user db 
const user=new User({
    name,email,password:hashpassword,confirmpassword:hashconfirmpassword,role
})
           res.status(200).json({
             
            succesfull:true,
            message:"user created successfully "
           });
          }
         } catch (error) {
console.error(error);
return res.status(500).json({
    success:false,
    message:"Error in creating user "
}); }
        
}