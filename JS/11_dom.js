console.log("Hello World")

console.log(document.body)
let cont = document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
console.log(cont.lastElementChild.style.color = 'red')
console.log(cont.lastElementChild.style.background = 'pink')
console.log(cont.lastElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild)              // first element
document.body.firstElementChild.childNodes  //all child nodes
console.log(document.body.firstElementChild.children)    //only html elements
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[1].nextElementSibling)
console.log(document.body.firstElementChild.children[1].previousElementSibling)
console.log(document.body.firstElementChild.children[1].previousSibling)
