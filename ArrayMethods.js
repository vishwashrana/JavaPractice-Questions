// toString method -returns a string with values separated by commas
let fruits=["apple","orange","banana","pineapple"];

console.log(fruits.toString());

console.log(fruits.join(" "));

console.log(fruits.pop(" "));

let fr=fruits.push("watermelon");

console.log(fruits);

delete fruits[3];

console.log(fruits);

let num=[1,2,3,4,5];

let num1=[6,7,8,9,10];

let val=num.concat(num1);

console.log(val);

let value=[2,5,8,9,6,3,1,4,7];

let res=value.sort();

console.log(res);

let result=fruits.sort();

console.log(result);

let Num=[10,11,12,13,14,15,16,17,18];
let results=Num.slice(2,6);
console.log(results);

let chars=["a","b","c","d","e","f","g","h","i"];
let char=chars.reverse().join(" ");
console.log(char);
let charr=chars.indexOf("d",0);
console.log(charr);

let numbers=[2,4,6,8,9,10];
let hasEvenNum=numbers.some((num) => num%2===0);
console.log(hasEvenNum);

const doubleNum=numbers.map((num) =>num*2  );
console.log(doubleNum);

let fil=numbers.filter((num) => num%2===0);
console.log(fil);

let red=numbers.reduce((total,num) => total+num,0);
console.log(red);

console.log(numbers.forEach((num) => num*2));

// iteration of arrays

let array=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// Arrow function

let NumBers=[8,9,10,11]
let double=(num) => num*2;
console.log(NumBers);
console.log(double);
let dou=function(numBers){
    return numBers*2;
}
console.log(dou());




