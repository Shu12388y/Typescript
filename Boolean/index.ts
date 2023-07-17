
function addSum(a:number,b:number):number{
    return (a+b)
}
console.log(addSum(1,2))



// ?let us define boolean data type

let isValue:boolean=true;

// ?TODO  1: write a function to check the number is even or not

function isEven(val:number):boolean{
if(val%2==0){

    return true;
}
else{
    return false;
}


}

// ?TODO 2: write  a function to check whether a number is divisible by 4 and 8


function isDivisible(value:number):boolean{
    if(value%4==0 && value%8==0){
        return true;
    }
    else{
        return false;
    }
}



// Now let us define big int type

let number:bigint=1298984302808989898832n

// in the last we have add "n"