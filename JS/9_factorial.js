let a = -5;

function factorial(number) {
    if(number == 0) return 1;
    else if(number < 0) {
        console.log("number is negative")
        return
    }
    let arr = Array.from(Array(number+1).keys())
    // console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a*b
    })
    console.log(c)
}
// console.log(factorial(a))


function facFor(number) {
    if(number == 0) return 1;
    else if(number < 0) {
        console.log("number is negative")
        return
    }
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac *= index
    }
    return fac
}

console.log(facFor(a))