console.log("Hello...I am Harshada!")

let a = 3;
let b = 2;
console.log(a ** b)

let c = "2"
if(c == b) console.log(true);

if(c === b) console.log(true);
else console.log(false);

// practice set

// 1
let age = 11;
(age>10 && age<20) ? console.log(true) : console.log(false);

// 2
let s = 5;
switch(s) {
    case 1: console.log("1");
            break;

    case 2: console.log("2");
            break;

    case 3: console.log("3");
            break;
            
    case 4: console.log("4");
            break;
    
    default: console.log("Incorrect number")
}

// 3
let n = 2
if(n%2==0 && n%3==0) console.log("yes");
else console.log("no");

// 4
let num = 7
if(num%2==0 || num%3==0) console.log("yes");
else console.log("no");

// 5
let age2 = 1
let ans = (age2 > 18) ? "Yon can drive" : "You cannot drive"
console.log(ans);