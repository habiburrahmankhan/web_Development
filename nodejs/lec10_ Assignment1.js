const fs = require('fs')
var  obj = {}

fs.readFile("animal.txt" , function (error , data) {
    if(error) throw  error
    var datas = data.toString().split("\n")
    console.log(data.toString())
    console.log(datas)

    for (let i = 0; i <datas.length ; i++) {
        if (!obj.hasOwnProperty(datas[i]))
        {
            obj[datas[i]] = 1
        }
        else
        {
            var b = obj[datas[i]]
            obj[datas[i]] =  b + 1
        }
    }
    console.log(obj)
    write(obj)
})

function write( obj)
{
    var text = "{ \n"
    for (var i in obj)
    {
        text = text + i +  " : " +  obj[i] + " , \n"
    }
    text +=" } "
    fs.writeFile("animalcount.txt" ,text, function (error) {
        if (error) throw error

        console.log("file was written  of animal count ")

    })
}