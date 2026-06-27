const express = require("express")

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
app.use("/user",
    [
    (req,res,next)=>{  //request handler function 
console.log("Handlling the route handler")
    // res.send("Hello from Server 1")
    next()    // next is call to go to the next route handler as from this we did't return anything

},

(req,res,next)=>{  //request handler function 
console.log("Handlling the route handler 2")

    // res.send("Hello from Server 2")
   next() 

}
,
(req,res,next)=>{  //request handler function 
console.log("Handlling the route handler 3")

    // res.send("Hello from Server 3")
next()
},

(req,res,next)=>{  //request handler function 
console.log("Handlling the route handler 4")

    res.send("Hello from Server 4")

}
    ]
)



app.listen(3000,()=>{
    console.log("Server is listening on port 3000..")
})

//npm i -g nodemon    //its automatically refresh the Server when we do our changes