const express = require("express")
const route = express.Router()
let student = [
    {
        name: "adnan" , subject :  "web dev "

    },
    {
        name: "habib" , subject :  "coding programming"
    }
]
route.get("/" , function (req , res ) {
    res.send(student)
})

route.get("/:id" , function (req , res ) {
    res.send(student[req.params.id])
})


module.exports = route