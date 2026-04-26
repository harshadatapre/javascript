//for loop
let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }


// forin loop
let obj = {
    name: "Harshada",
    role: "Programmer",
    company: "tcs"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// if you only want to print a key
for (const key in obj) console.log(key)

// forof loop
for (const c of "Harshada") {
    console.log(c)
}




