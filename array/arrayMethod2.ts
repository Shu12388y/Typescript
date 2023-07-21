const newArrays:number[]=[1,2,3,4,5,6,7]


// Map method 
// todo 1: double each element in the newArrays
//
const doubleData:number[]=newArrays.map((curl:number)=>{
  curl*2
})

console.log(doubleData);


// todo 2: convert the number to string in newArrays
//

const toString:string[]=newArrays.map((st:number)=>{
  st.toString()
})

console.log(toString);


// filter method

// todo 3: filter even number


const evenNumber:number[]=newArrays.filter((cuElm:number)=>{
cuElm%2===0
})
console.log(evenNumber);

// todo 4: filter numbers greater than 3

const greaterNumber:number[]=newArrays.filter((curElem:number)=>{
  curElem>3
})

console.log(greaterNumber);



// Task 1: Write a function that takes a arr and return average of the array 
//
const temp:number=0;
const averageArray=(arr:number[]){
for(let element of arr){
  temp +=element
}
return temp;
}

averageArray(newArrays)



// Task 2: Write a function return max element from a array


const maxArray=(arr:number[]){
  arr.sort((a:number,b:number)=>{
    return a-b

  })
}


maxArray(newArrays)



