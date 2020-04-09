const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine" , "hbs" )
app.get("/" , function (req , res) {

    db.getALLUsers()
        .then((persons) =>
        {
            res.render("persons" , {persons})
        })
        .catch((err) =>
        {
            res.send(err)
        })
})

app.get("/add" , function (req , res) {
    res.render("person_add")
})
app.post("/add" , function (req , res) {

})
app.listen(4444 , function () {
    console.log("Server stated as  on 4444")
}
)