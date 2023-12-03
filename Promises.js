// Promises -is a javascript object that returns a value which you
// hope to receive in future

// Promise has three states

// pending 
// fulfilled
// Rejected

let completed=true;

let learnReact=new Promise(function(resolve, reject){
    setTimeout(function(){
        if(completed){
            resolve("I have completed learning React");
        }
            else
            {
                reject("I haven't complete to learn React ");
            }
    },3000)

});
learnReact.then(success => console.log("Then: +success"));
learnReact.catch(error => console.log("catch:  +error"));
learnReact.finally(() => console("finally: +success or error"));