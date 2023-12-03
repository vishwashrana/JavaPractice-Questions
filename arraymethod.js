// important array method
const numbers=[2,4,6,8,10,12];
function disPlay(number,index){
    console.log(`index is ${index} and number is ${number}`);
}
numbers.forEach(function(number,index){
    
    console.log(`index is : ${index} and number is : ${number}`);

});

// map method
const values=[10,20,30,40,50];
const square=function(value){
    return value*value;
}
const squareNumber=values.map(square);
console.log(squareNumber);

// filter method 
const valUes=[1,2,3,4,5,6,7,8,9,10];

const isEven=function(value){
    return value%2 ==0;
}
const res=valUes.filter(isEven);
console.log(res);

// reduce method
 
const numBers=[1,2,3,4,5,10];
 
const result=numBers.reduce((total,res) => {
    return total+res;

});
console.log(result);

// find method 
const myArray=['dog', 'cat', 'lion','deer'];

function isLength3(string){
    return string.length===3;

}
const ans=myArray.find((string)=>
string.length===3   );
console.log(ans);

// Every method
const numbers1=[20,40,60,80,100];
const out=numbers1.every((number)=>number%2===0);
console.log(out);

// fill method

const myArray1 =[1,2,3,4,5,6,7,8,9];
myArray1.fill(2,2,4);
console.log(myArray1);

// splice method
const myArray2=[21,22,23,24,25,26];
myArray2.splice(2,2);
console.log(myArray2);


