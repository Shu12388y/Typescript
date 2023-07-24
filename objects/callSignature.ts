//? call signature
//? The function call signature refer to the declaration or definition of the funciton which includes the function's name, parameter, and return type
//? It define the structure and type information of the function wihtout including the function's implementation or body.
//? It is more like creating a method in object
//? call signature are typically used inside object type notation to describe the shape of function within object type.


type Student={
    name:string,
    address:string,
    rollNumber:number,
    age:number,
    gender?:string
    greet:(country:string)=>string      //?call signature
}

const newStudent1:Student={
    name:"shubham",
    address:"India",
    rollNumber:12,
    age:12,
    greet:(country):string=>`welcome my name is ${newStudent1.name}. I am ${newStudent1.age} yrs old & I am from ${country}`
}

console.log(newStudent1.greet("India"))