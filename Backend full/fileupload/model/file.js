const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Image: {
        type: String
    },
    tag: {
        type: String
    },
    email: {
        type: String
    }
});

// post middleware to validate file type or log saved doc
fileschema.post('save', async function (doc) {
    try {
        console.log("File saved successfully:", doc);
     // transportar 
     let transportar=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL-USER,
            pass:process.env.MAIL_PASS, 
        }
     })


     // SEND MAIL
     let info = await transportar.sendMail({
        from: process.env.MAIL_USER,
        to: doc.email,
        subject: "File Upload Confirmation",
        text: `Your file ${doc.name} has been uploaded successfully!`
     }); 

    } catch (error) {
        console.error("Error saving file:", error);
    }
});

module.exports = mongoose.model('file', fileschema);
