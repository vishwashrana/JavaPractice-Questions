let age=18;
let message;
age>=16?(message="you can drive the car"):(message="no you can't drive the car");
console.log(message);

                                                    // Spread operator 

// Introduction to the JavaScript object spread Operator
// In ES6, you use the spread operator (...) to unpack elements of an array. 
// The spread operator can be very useful to clone an array. 

const fruits=["apple", "orange", "mango","grapes","banana"];
const result=[20,50,60,"watermelon",...fruits]
console.log(result);

const student={
    name:"vishwash",
    age:20,
};

const students={
    ...student,
    address:"Delhi",
};
console.log(students);

