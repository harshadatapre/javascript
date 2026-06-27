// mfr - > map, filter & reduce
// let arr = [1, 13, 5, 7, 11]

// let newArr = arr.map(e => {
//     return e*2;
// })
// console.log(newArr)

// const greaterThenSeven = (e) => {
//     if(e>7) return true

//     return false
// }

// console.log(arr.filter(greaterThenSeven))

// reduce() function
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a+b
}
console.log(arr2.reduce(red))

// Array.from("Harshada")
// console.log(Array.from("Harshada"))

// practice set 

// 1, 2, 
let arr3 = [6, 7, 8, 9, 10]

let n;
while(n != 0) {
    n = window.prompt("Enter a number");
    arr3.push(n)
}

console.log(arr3)

// 3
let result = arr3.filter(num => num % 10 === 0)
console.log(result)

// 4
// let ans
let ar = []
arr3.forEach((value) => {
    ar.push(value*value)
})
console.log(ar)

