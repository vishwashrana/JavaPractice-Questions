const student={
    name: 'manish',
    age: 18,
    aboutMe: function (hobby,game){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
const student1={
    name: 'vishwash',
    age: 32,
}
student.aboutMe.call(student,"net","cricket");
student.aboutMe.call(student,["net","cricket"]);