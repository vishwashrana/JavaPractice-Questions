function isEven(num){
    if(num%2==0){
        return true;
    }
        else
        {
            return false;
        }
}

console.log(isEven(20));

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
    if(array[i]==target){
        return i;
}
    }
return -1;
}
 const myArray=[,1,2,3,20,5,6];
 const ans=findTarget(myArray,20);
 console.log(ans);
