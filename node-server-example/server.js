const express = require("express")
const server = express()
server.get("/" ,function (req , res , next ) {
     res.send("hello world ")

} )
server.get("/:tod" , function (req , res , next) {
     let greeting = "good morning " + req.params.tod + " "+  req.query.name  ;
     res.send(greeting)
})

server.listen(2121)