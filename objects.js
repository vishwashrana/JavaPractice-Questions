const person={
    name: 'John',
    age: 21,
    add:"delhi",
    hobbies:[ 'guitar',"cricket"  ]
};
console.log(typeof person);
console.log(person);
console.log(person.name);
person.name="Vishwash";
console.log(person.name);
console.log(person["name"]);
person.gender="male";
console.log(person);
// const key="email";
// person[key]='vishwashrana9@gmail.com';
// console.log(person);
person.email="manishrana9@gmail.com";
console.log(person);
// loop  in object

for(let key in person){
    console.log(key);

}
for(let key of Object.key(person)) {
    console.log(person[key]);
}

// deep copy of objects 
let student={
    name:"vishwash",
    age:32,
    address:{
        area:"Gurgaon",
        pin:123352
    }
}
let obj=structuredClone(student);