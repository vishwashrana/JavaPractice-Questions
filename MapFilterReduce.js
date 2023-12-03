let arr=[4,6,7,8,9,10,11,12];
// Map function
let output=arr.map(function(val){    
    return val*2;
});
console.log(output);  

// filter function
let out=arr.filter(function(value){
    return value % 2=== 0;
});
console.log(out);

// Reduce function

let res=arr.reduce(function(acc,curVal){
    return acc+curVal;
},0);

console.log(res);

// for loop

let sum =0;
for(let i=0;i<arr.length;i++){
     sum=sum+arr[i];
}
console.log(sum);

let employees=[
    {firstName:"Vishwash",lastName:"Rana",age:30}, 
    {firstName:"Manish",lastName:"Rana",age:28},
    {firstName:"Reyansh",lastName:"Rana",age:26},
    {firstName:"Nihira",lastName:"Rana",age:24},
]

let result =employees.map(function(row){
    return {firstName:row.firstName,lastName:row.lastName};
});
console.log(result);