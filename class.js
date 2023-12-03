// class Student{
//     constructor(name, email,age)
// {
//     this.name = name;
//     this.email = email;
//     this.age = age;
// }
// displayDetails(){
//     return `${this.name} ${this.email} ${this.age}`
// }
// isStudying(){
//     return this.age<=10;

// }
// }
// const student=new Student("vishwash","vishwashrana9@gmail.com",21);
// console.log(student.displayDetails());
// console.log(student.isStudying());

class Person{
    constructor(firstName,lastName,phoneNo){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
    }
    getData(){
        return (`${this.firstName} , ${this.lastName} , ${this.phoneNo}`);
    }
    setData(firstName,lastName,phoneNo){
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.phoneNo = this.phoneNo;
    }
}

const person1=new Person("Manish","Rana",7568309524);
console.log(person1.getData());
 person1.setData("Reyansh","Rana",9988776655);
 console.log(person1.firstName);
 