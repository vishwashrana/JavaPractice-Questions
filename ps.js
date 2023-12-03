const student={
    name:"Vishwash",
    lastName:"Rana"
    

}
student.age =21;
function printDetails({name,lastName,age}){
    console.log(name);
    console.log(lastName);
    console.log(age);
  
}
printDetails(student);

// lexical scope
var a = 10; // variable a assigned to 10

var func = function (){ // outermost function
    var b = 20;
    console.log("a and b is accessible (outer):", a, b);
    var innerFunc= function (){ // innermost function
        var c = 30;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);