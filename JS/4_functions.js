//exp 1
function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
}
// nice("Harshada")
// nice("Harry")

//ex 2
function sum(a, b) {
    console.log(a+b)
}
// sum(2,4)


//ex 3
function sum2(a, b, c=3) { // here c is a default parameter
    return a+b+c;
}
let addition = sum2(5,8) 
let result = sum2(6, 5, 7)  //now if 7 is given then it will consider c= 7 not c=3 ...
//let restult2 = sum2(2) //if we didn't give needed values...then run and ckeck what will happen...NaN=not a number
console.log(addition)
console.log(result)
// console.log(result2)


//ex 4
const fun = (x) => {
    console.log("I am an arrow function " + x)
}
fun(34)


//practice set 

//1 & 2
const obj = { 
    harry: 98,
    rohan: 70,
    aakash: 7
}
for (const key in obj) {
    const value = obj[key]
    console.log(value)
}

//3
function num(n) {
    if(n==1 || n==2 || n==3 || n==4)
        console.log(n)
    else 
        console.log("Try again");
}
num(9)

//4
function meanof5(a, b, c, d, e) {
    console.log((a+b+c+d+e)/2)
}
meanof5(1, 2, 3, 4, 6)