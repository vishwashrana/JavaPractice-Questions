let firstName = "Vishwash";
let res = firstName.slice(2, 6);
console.log(res);

let fName = "Manish";
let lName = "Rana";
let age = 29;
let nString = fName + " " + lName;
console.log(nString);
let About = `My name is ${fName} and my age is ${age}`;
console.log(About);

let name1;
console.log(name1); //undefined means if we have not assigned any vale to this variable 

// null
let myVar = null;
console.log(typeof myVar);

let agee = 25;
let drink = agee >= 20 ? "coffee" : "water";
console.log(drink);

let day = 2;
switch (day) {
    case 0:
        console.log("today is sunday");
        break;
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
}

let i = 1;
let total = 0;
while (i <= 10) {
    total += i;

    i++;
}
console.log("total is " + total);