//? define an array in ts

//? using square brackets []

const numbers:number[]=[1,3,4,5,3,6,7];

//? using array constructor

const number1:number[]= new Array(1,2,3,4,5)


//? using array "of" method

const named: string[]=Array.of("shubham","jhon","harry")



//? let make student's name array

let studentName:string[]=["shubham","kunal","harry","sam","kam","pam","tim"];

// let rollNo:number[]=[]

// for(let i=1;i<studentName.length;i++){
//     rollNo.push(i)

// }

for(let j=0;j<studentName.length;j++){
    console.log(`Roll number ${j+1} is ${studentName[j]}`);
    
}

//? Output:
//?   Roll number 1 is shubham
//?   Roll number 2 is kunal
//?   Roll number 3 is harry
//?   Roll number 4 is sam  
//?   Roll number 5 is kam  
//?   Roll number 6 is pam  
//?   Roll number 7 is tim  