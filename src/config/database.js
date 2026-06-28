const mongoose = require("mongoose")


const connectDB = async()=>{  //return promise so we have to handle it

   await mongoose.connect("mongodb+srv://newuser:newuser@cluster0.b8uieur.mongodb.net/devTinder")
}




module.exports = connectDB
