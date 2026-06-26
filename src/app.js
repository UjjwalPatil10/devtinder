const express = require("express")

const app = express()

//send req and get res from server
app.use("/",(req,res)=>{  //request handler function 

    res.send("Hello From Dashboard yes 22")

})
app.use("/hello",(req,res)=>{  //request handler function 

    res.send("Hello hello")

})

app.use("/test",(req,res)=>{  //request handler function 

    res.send("Hello from Server")

})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000..")
})

//npm i -g nodemon    //its automatically refresh the Server when we do our changes