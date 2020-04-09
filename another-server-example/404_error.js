const express = require("express")
const server = express()


server.get("/b" , function (req , res , next ) {
    res.send("bbbbbbbbb ")
})
server.get("/a" , function (req , res , next ) {
    res.send("aaaaaa ")
})


server.use(function (req , res , next) {
     res.send("<h2> 404 NOT FOUND </h2>");
})



server.listen(1234)