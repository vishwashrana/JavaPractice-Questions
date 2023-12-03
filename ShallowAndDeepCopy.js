// Shallow Copy -when a reference variable is copied into a new reference variable
// using the assignment operator

let employee={
    employee_id:"E007",
    ename:"Vishwash Rana",
    eaddress:"Delhi",
    salary:65000
}
var newEmployee = employee
console.log(newEmployee);
newEmployee.employee_id = "E008";
newEmployee.ename = "Manish Rana";
console.log(newEmployee);

// Deep Copy

var newEmployee=JSON.parse(JSON.stringify(employee));

console.log("-----json--------");
console.log(newEmployee)


var newEmployee = Object.assign({},employee);
var newEmployee = {...employee}

newEmployee.ename = "Nihira";

 console.log(newEmployee);

