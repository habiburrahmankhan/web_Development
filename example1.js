// function getFirstName(fullname) {
//     return fullname.split(" ")[0] ;
// }
// function greeter(findname , fullname) {
//     let firstname = findname(fullname)
//     console.log("hello " + firstname);
// }
// greeter(getFirstName ,"hrkhan khan");

// higher order function
function createGreater(name) {
    let firstname = name.split(" ")[0]
    function greeter()
    {
        console.log("hello " + firstname) ;
    }
    return greeter ;
}

let hrgreeter = createGreater("hrkhan khan")
let adgreeter = createGreater("adnan khan")

hrgreeter();
adgreeter();
function f1() {
    function f2() {
        return 5
    }
    return f2
}
let  x = f1()
let p  = x()
console.log(p)
let arr = [1,2,3,4,5,6]
// let arr2 = arr.map(function (item) {
//     return item*item
// })
// console.log(arr2)
// let arr3 = arr.map(Math.sqrt)
// console.log(arr3)

let arr2 = arr.filter(function (item) {
     return item%3==0
})
console.log(arr2)
let fact = arr.reduce(function (acc , item) {
    return acc*item
})
console.log(fact)