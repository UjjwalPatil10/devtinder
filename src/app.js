const express = require("express")
const { authMiddleware, userauthMiddleware } = require("./middlewares/auth")
const connectDB = require("./config/database")
const User = require("./models/user")

const app = express()


connectDB()
// app.get("/user/:userID/:name/:password",(req,res)=>{
//     console.log(req.params)
//     res.send({firstname: "Ujjwal",lastname:"Patil"})

// }) 

// //This will only handle GET call to user
// app.get("/user",(req,res)=>{
//     res.send({firstname: "Ujjwal",lastname:"Patil"})

// }) 

// app.post("/user",(req,res)=>{
//     console.log(req.body)
//     res.send("Data successfully saved to DB")

// }) 

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully")

// }) 

//send req and get res from server
// app.use("/",(req,res)=>{  //request handler function 

//     res.send("Hello From Dashboard yes 22")

// })
// app.use("/hello",(req,res)=>{  //request handler function 

//     res.send("Hello from 1st")

// })
// app.use("/hello/2",(req,res)=>{  //request handler function 

//     res.send("Hello hello")

// })

//This will match all the http method API calls to /test
// app.use("/test",(req,res)=>{  //request handler function 

//     res.send("Hello from Server 1")

// },



// )


//Middleware and route handlers
// Multiple route handlers
// app.use("/user",
//     [
//     (req,res,next)=>{  //request handler function 
// console.log("Handlling the route handler")
//     // res.send("Hello from Server 1")
//     next()    // next is call to go to the next route handler as from this we did't return anything

// },

// (req,res,next)=>{  //request handler function 
// console.log("Handlling the route handler 2")

//     // res.send("Hello from Server 2")
//    next() 

// }
// ,
// (req,res,next)=>{  //request handler function 
// console.log("Handlling the route handler 3")

//     // res.send("Hello from Server 3")
// next()
// },

// (req,res,next)=>{  //request handler function 
// console.log("Handlling the route handler 4")

//     res.send("Hello from Server 4")

// }
//     ]
// )


//Independent route handlers

// app.get("/user",(req,res,next)=>{
// console.log("Handling the route user 2")
// // res.send("2nd route handler")
// next()

// })

// app.get("/user",(req,res,next)=>{
// console.log("Handling the route user 1")
// res.send("1st route handler")

// next()
// })

// =================================================================
//GEt Users->Middleware chain ->request handler
// app.use("/", (req, res, next) => {
//     // res.send("Handling /route")
//     next()
// })

// app.get("/user", (req, res, next) => {
//     console.log("Handling User Route")
//     next()

// },
//     (req, res, next) => {
//         // res.send("2nd route handler")
//         next()

//     },
//     (req, res, next) => {
//         res.send("2nd route handler22")
//         // next()
//     }

// )

// ==================================Logic of checking API is Authorised or Not =========================
// app.get("/admin/getAllData",(req,res)=>{
//     const token = "xyz"
//     const isAuthorised = token === "xyz"
//     if(isAuthorised){
//         res.send("Authorised request")   //default without giving status its 200 request
//     }else{
//         res.status(401).send("Unauthorised request") 

//     }
// })

// app.get("/admin/deleteAllData",(req,res)=>{
//     const token = "xyz"
//     const isAuthorised = token === "xyz"
//     if(isAuthorised){
//         res.send("Authorised request")   //default without giving status its 200 request
//     }else{
//         res.status(401).send("Unauthorised request") 

//     }
// })

// ============================================================================================
//Handle Auth Middleware for all Get,POST... so we didn't write auth logic again and again
//middleware goes to particular route 

app.use("/admin",authMiddleware)  // we also use it like this
// app.use("/admin",(req,res,next)=>{
//     console.log("Admin auth is getting checked..")
// const token = "xyz"
// const isAuthorized = token === "xyz"

// if(!isAuthorized){
//     res.status(401).send("Unauthorised request")
// }else{
//     next()
// }
// })

// app.get("/user",userauthMiddleware,(req,res,next)=>{
//     res.send("User Data Sent")
// })

// app.get("/user/login",userauthMiddleware,(req,res,next)=>{
//     res.send("User Logged in successfully")
// })

// app.get("/admin/getAllData",(req,res,next)=>{
//     res.send("All Data Sent")
// })

// app.get("/admin/deleteAllData",(req,res,next)=>{
//     res.send("Deleted a Data")
// })


// ======================================================================
//Logic of DB call and get user Data
//wild card error handling
// app.use("/",(err,req,res,next)=>{  //to handle err so take err always 1st argument

//     if(err){
//         res.status(500).send("Something went wrong")
//     }

// })


// app.get("/getUserData",(req,res)=>{
// //Logic of DB call and get user Data
// try{
//  throw new Error("jgffkfh")
//     res.send("User Data Sent")
// }catch(err){
// res.status(500).send("Some error occur Please contact Support team")
// }
// })

//Create a signup post API 

app.use(express.json())  //its  a middleware given by expressjs which handle the JSON object and convert
 //it into the JS Object


app.post("/signup",async(req,res)=>{

// console.log(req.body)
    // const user = new User({         //here we create a instance of model User by new keyword
    //     firstName:"Shiv22",
    //     lastName :"shankar",
    //     emailId :"shiv@gmail.com",
    //     password :"1234"
    // })

        const user = new User(req.body) // here we make API Dynamic to receive data from the Users

try{
  await  user.save()
   res.send({message:"User Created Successfully:",user})
}catch(err){
    res.status(400).send("Error saving the user : " , err.message)
}

})




connectDB()
.then(()=>{
console.log("MongoDB Connected Successfully")
app.listen(3000, () => {
    console.log("Server is listening on port 3000..")
})
}).catch((err)=>{
console.log("Error connecting mongoD")
})




//npm i -g nodemon    //its automatically refresh the Server when we do our changes