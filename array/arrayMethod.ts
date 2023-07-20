const array:string[]=["apple","banana","grapes"];

// push operaiton
const newName=array.push("kiwi")
console.log(newName)
//Output : 4
console.log(array);
//Output:["apple","banana","grapes","kiwi"]


//pop operation
//
const popOperation=array.pop("kiwi")


console.log(popOperation);

//Output:kiwi

console.log(array);

//Output:["apple","banana","grapes"]



// Iteration 

// using for loop
for(let i=0;i<array.length;i++){
  console.log(array[i]);
  
}


