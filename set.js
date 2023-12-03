// set 
const numbers=new Set([1,2,3,4,5,6]);
console.log(numbers);

// prototype object 

function CreateUser(fName,lName,age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}
 CreateUser.prototype.aboutMe=function(){
      
    console.log(`My name is ${this.fName} and last name is ${this.lName} and my age is ${this.age}`);

    
}
const user1=new CreateUser("Vishwash","Rana",32);