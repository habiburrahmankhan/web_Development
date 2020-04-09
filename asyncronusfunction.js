// function task(done) {
//     console.log("doing some task")
//     done()
// }
// task(function () {
//     console.log("task was done ")
// })
// console.log("we did a task ")
//
//
// function task(done) {
//     console.log("we are doing some task ")
//     setTimeout(done , 5000)
// }
// task(function () {
//     console.log("task was done ")
// })
//
//
// console.log("task is done ")
//
//
//
// let a = false
// setTimeout(function () {
//     a = true
// } , 1000)
// while(!a)
// {
//     console.log(1)
// }
//

// pratical example

function downloadFile(url , downloaded) {
console.log("downloading file " + url )
    setTimeout(function () {
        let filepath = "c\\window\\xyz.txt"
        console.log("file is downloaded to path " + filepath)
        downloaded(filepath)
    },3000)


}
downloadFile("htttp:\\google.com\\logo.png" , function (path) {
    console.log("we go to file at path " + path)
})