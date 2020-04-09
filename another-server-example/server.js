const express = require("express")
const server = express()


const m1 = function(req , res , next)
{
    console.log("We are in middle ware 1 ")
    next()
}
const m2 = function(req , res , next)
{
    console.log("We are in middle ware 2 ")
    next()
}

const m3 = function(req , res , next)
{
    console.log("We are in middle ware 3 ")
    next()
}


server.use(m1)
server.use(m2)
server.get("/" , function (req , res , next ) {
    res.send("hello world ")
})

server.use(m3)

server.listen(3232)
