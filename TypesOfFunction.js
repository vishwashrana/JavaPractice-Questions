// function statement
function xyz(){
    console.log("function statement");
}
xyz();
// function declaration
function xyz(){
    console.log("function statement");
}
xyz();
// function expression
let x=function(){
    console.log("function expression");
}
x();
// Anonymous function
let y=function(){
    console.log("Anonymous function");
}
();
setTimeout(function(){
console.log("Example of setTimeout function having anonymous function");    
},1000)

// Named function expression
let f=function hello(){
    console.log("Named function expression");
} 
f();
// First class function
var i=function(){
    console.log("First class function");
}
function j(func) {
    console.log(func);
    
}


j(i);
// Arrow function
// Parameter vs Arguments