const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})
function getALLUsers  ()
{
    return new Promise(function (resolve , reject) {
        connection.query(
             ` SELECT * FROM persons
            ` ,
            function (err , rows , cols) {
                if (err)
                {
                    reject(err)
                }
                else
                {
                    resolve(rows)
                }
            }
        )
    })
}
exports = module.exports = {
    getALLUsers
}