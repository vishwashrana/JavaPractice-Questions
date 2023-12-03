// closure
// function printFullName(fName,lName) {
//     function printName(){
//         console.log(fName,lName);
//     }
//     return printName;
// }
// const res=printFullName("Vishwash","Rana");
// res();

// function sum(a,b){
    
//     function printSum(){
//         let c=a+b;
//         console.log(c);

//     }
//     return printSum;
// }
// const out=sum(10,20);
// out();
function outerFunc(){
    let val="Hello Vishwash";
    function innerFunc(){
        console.log(val);
    }
    return innerFunc();
}

let res=outerFunc();
res();