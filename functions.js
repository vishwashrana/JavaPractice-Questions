// functions:- are first-class citizens. This means that you can store functions in variables,
//  pass them to other functions as arguments, and return them from other functions as values.

function add(a,b){
    return a+b;

}
let sum=add;

let result=sum(100,200);
console.log(result);

// Immediately invoked function execution
// If you want to create a function and execute it immediately after the declaration, 
// you can declare an anonymous function like this:

(function() {
    console.log('IIFE');
})();