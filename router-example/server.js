const server = require("express")()

const teacherroute  = require("./roots/teacher")
const studentroute = require("./roots/student")
server.use("/student" , studentroute)
server.use("/teacher" , teacherroute)
server.listen(1234)