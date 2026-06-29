
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
    firstName :{
        type : String,
        required: true,
        minLength:4,
        mAXLength:50,
    },
       lastName :{
        type : String
    },
       emailId :{
        type : String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true
    },
       password :{
        type : String,
        required: true
    },
       age :{
        type : String,
        min:18
    },
       gender :{
        type : String,
       validate(value){ //this function is only work when we create a new object for patch,put its not work for that we need to 
        // add validator for it by runValidators
        if(!["male","female","othere"].includes(value)){
            throw new Error("Gender Data is not valid!")
        }
       }
    },
        photoUrl :{
        type : String,
        default : "https://www.shutterstock.com/image-vector/isolated-object-avatar-dummy-symbol-260nw-1290296656.jpg"
    },
        about :{
        type : String,
        default : "This is default about the user!"  //default is used when we didn't give default field
    },
        skills :{
        type : [String]
    },
},
{
    timestamps:true
}
)

module.exports = mongoose.model("User",userSchema)