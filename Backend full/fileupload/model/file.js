const mongoose=require("mongoose");
const fileschema=new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    Image:{
        type:String
    },
    tag:{
        type:String
    },
    email:{
        type:String ,
    },

})
module.exports = mongoose.model('file', fileschema);
