let names=['vishwash','manish','reyansh','poonam'];
console.log(names);
console.log(names[3]);
names[1]="Manish";
console.log(names);
console.log(typeof names);
let res=Array.isArray(names);
console.log(res);
names.push("Papa");
console.log(names);
names.pop();
console.log(names);
names.unshift("Mummy");
console.log(names);
let name1=["papa",...names];
console.log(name1);
console.log(name1.length);
let Names=[];
for (let i=0; i<names.length; i++)
{
    Names.push(names[i].toUpperCase());

}
console.log(Names);

for(let name of Names){
    console.log(name);
}

let fruits=['apple,"banana',"mango",'grapes'];
console.log(fruits);

