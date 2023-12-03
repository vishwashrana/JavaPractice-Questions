// spread operator 

let num=[1,2,32,64,128];
let  newNum=[20,...num];
console.log(newNum);

// // Object destructuring 
// const names={
//     firstName: 'John',
//     lastName: 'Doe',
//     phone:2525363
// };

// const {firstName, lastName, phone}=names;
// console.log(firstName);

// // Array of objects 
// const users=[
//     {firstName: 'John', lastName: 'doe'},
//     {firstName: 'Rahul', lastName:'gupta'},
// ]
// for (let user of users) {
//     console.log(user.firstName);
// }
// Rest operator 

function input(...rest){
    let sum=0;
    for (let i=0; i<rest.length; i++) {
        sum += rest[i];
}
return sum;
}
console.log(input(1,2));
console.log(input(1,2,3));

// let x;
// console.log(x);
// let y=null;
// console.log(y);

// hoisted();
// function hoisted(){
//     console.log("Hello vihshwash");
// }






