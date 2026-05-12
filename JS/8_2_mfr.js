// mfr - > map, filter & reduce
let arr = [1, 13, 5, 7, 11]

// let newArr = arr.map(e => {
//     return e*2;
// })
// console.log(newArr)

const greaterThenSeven = (e) => {
    if(e>7) return true

    return false
}

console.log(arr.filter(greaterThenSeven))

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a+b
}
console.log(arr2.reduce(red))

Array.from("Harshada")
console.log(Array.from("Harshada"))

// practice set 

// 1
let arr3 = [6, 7, 8, 9, 10]
