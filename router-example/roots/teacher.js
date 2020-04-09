const express = require("express")
const route = express.Router()

let teacher = [
    {
        name: "Arnav" , subject :  "web dev "

    },
    {
        name: "pra" , subject :  "coding programming"
    }
]
route.get("/" , function (req , res ) {
    res.send(teacher)
})

route.get("/:id" , function (req , res ) {
    res.send(teacher[req.params.id])
})
module.exports = route