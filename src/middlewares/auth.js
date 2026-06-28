const authMiddleware = (req,res,next)=>{
    console.log("Admin auth is getting checked..")
const token = "xyz"
const isAuthorized = token === "xyz"

if(!isAuthorized){
    res.status(401).send("Unauthorised request")
}else{
    next()
}
}

const userauthMiddleware = (req,res,next)=>{
    console.log("User auth is getting checked..")
const token = "xyz"
const isAuthorized = token === "xyz"

if(!isAuthorized){
    res.status(401).send("Unauthorised request")
}else{
    next()
}
}

module.exports = {authMiddleware,userauthMiddleware}