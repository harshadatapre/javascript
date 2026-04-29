/*create a faulty calculator

this faulty calculator does following:

1. It takes 2 numbers as input from the user
2.It performs wrong operations as follows:

+  ->  -
*  ->  +
-  ->  /
/  ->  **

it performs wrong operations 10% of the times

*/
let random = Math.random();
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operator")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random > 0.1) {
    // perform correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // perform wroing operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

// function faultyCalculator (a, b, operator) {
//     const ramdomNum = Math.random();     //takes random number between 0 & 1
//     console.log(ramdomNum)
//     if(ramdomNum < 0.1) {

//         switch (operator) {
//             case "+": console.log (a - b)
//                       break;
            
//             case "*": console.log (a + b)
//                       break;

//             case "-": console.log (a / b)
//                       break;

//             case "/": console.log (a ** b)
//                       break;

//             default : console.log("Invalid operator")          
//         }
//     }
//     else {
//         switch (operator) {
//             case "+": console.log (a + b)
//                       break;
            
//             case "*": console.log (a * b)
//                       break;

//             case "-": console.log (a - b)
//                       break;

//             case "/": console.log (a / b)
//                       break;

//             default : console.log("Invalid operator")
//         }

//     }
// }
// faultyCalculator(15, 7, "/")