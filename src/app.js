const express = require("express")

const app = express()

//This will only handle GET call to user
app.get("/user",(req,res)=>{
    res.send({firstname: "Ujjwal",lastname:"Patil"})

}) 

app.post("/user",(req,res)=>{
    console.log(req.body)
    res.send("Data successfully saved to DB")

}) 

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully")

}) 

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
app.use("/test",(req,res)=>{  //request handler function 

    res.send("Hello from Server")

})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000..")
})

//npm i -g nodemon    //its automatically refresh the Server when we do our changes