console.log("Heyy..this is Harshada");

var a = 5;
var b = 6;
var c = "Harshada";

console.log(a + b + 8);

console.log(typeof a, typeof b, typeof c);

// modern js uses "let" not "var"

{
    let a = 66;
    console.log(a);
}

console.log(a);

{   var a = 66;
    console.log(a)
}

console.log(a);

let x = "Harshada";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name: "Harshada",
    "job code": 5600,
    is_handsome: true
}

console.log(o);

o.salary = "100crores";

console.log(o);

o.salary = "500crores";

console.log(o);

// quiz & practice set
let student = {
    name: "Harshada",
    "phone no": 832976345,
    marks: 99
}
console.log(student);

let s = "Sakshi";
s = s + 7;
console.log(s);

console.log(typeof s);

const obj = {
    name: "what's my name"
}
console.log(obj);
obj.name = 4;
console.log(obj);

obj.bb = true;
console.log(obj);

let word_mean = {
    surname: "Aadnaav",
    water: "pani",
    hand: "haat",
    no: "nahi",
    what: "kay"
}
console.log(word_mean.water);