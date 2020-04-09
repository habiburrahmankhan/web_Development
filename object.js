// let obj = {
//     anumber : 123 ,
//     astring : "aq123" ,
//     afunction : function () {
//         return this.anumber +  "  " + this.astring
//     }
// }
//
// console.log(obj.afunction())
//
// // //  new keyword
//
// let fruit = function (color , taste ) {
//     this.color = color
//     this.taste = taste
// }
// let apple = new fruit("red" , "sweet")
// let orange = new fruit("orange" , "sour")
// let mango =  {
//     color : "yellow" ,
//         taste : "sweet"
// }
// console.log(apple)
// console.log(orange)
// console.log(mango)
// console.log(this)
//
// function person(name , age)
// {
//     this.firstName  = name.split(" ")[0]
//     this.LastName  = name.split(" ")[1]
//     this.isadult = function () {
//         return age > 18
//     }
//
// }

// let p = new  person("harry potter" , 50)
// let h = new person("ram kumar" , 12)
// console.log(p.isadult())
// console.log(h.isadult())
let p = {
    a : 10
}
let q = Object.create(p)
q.b = 20

let r = Object.create(q)
r.c = 30
console.log(p.a)
console.log(q.a)
console.log(r.a)