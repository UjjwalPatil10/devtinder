const express = require("express")
const { authMiddleware, userauthMiddleware } = require("./middlewares/auth")

const app = express()

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

app.get("/user",userauthMiddleware,(req,res,next)=>{
    res.send("User Data Sent")
})

app.get("/admin/getAllData",(req,res,next)=>{
    res.send("All Data Sent")
})

app.get("/admin/deleteAllData",(req,res,next)=>{
    res.send("Deleted a Data")
})




app.listen(3000, () => {
    console.log("Server is listening on port 3000..")
})

//npm i -g nodemon    //its automatically refresh the Server when we do our changes