// High order function -is a type of function in which we can pass a function as an argument

function x(){
    console.log("Inside a function X");
}

function y(x){
    x();
};

y(x); //  here Y is a High order function and y x is a callback function

let radius=[2,4,6,8];

// let area=function(radius){
//     let output =[]; //
//     for (let i=0; i<radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// console.log(area(radius ));

let area=function(radius){
    return Math.PI*radius*radius;
}
let calcArea=function(radius,func){
    let outPut=[];
    for(let i=0;i<radius.length;i++){
        outPut.push(func(radius[i]));
}
return outPut
}
console.log(calcArea(radius,area));
