// Let us define a number. A number type can be postive, negative, floating, integer
let postiveNumber:number=9;
let negativeNumber:number=-8;
let floatNumber:number=3.12;


// In the above code we have define the number tyoes


// Now let us define some string


let named:string="shubham";
let fullName:string="shubham Paul";
let lastName:string="Paul";
let address:string="India"

// In the above content we have init the string types


// ?TODO 1: we have to concat two stringd


let newConcat:string=`Hello my name is${fullName}. My address is ${address}`
console.log(newConcat)



// ?TODO 2: we have to find the length of the string

let newLength:number=named.length
console.log(newLength)

// ?TODO 3: Convert the string to uppercase and lowercase


let uppercaseText:string=named.toUpperCase()
let lowercaseText:string=named.toLowerCase()


// ?TODo 4: to substring

let strindSent:string="Hello we have a new car";

let subString:string=strindSent.substring(0,3)
console.log(subString)


// ?TODO 5: string compare


let compValue:boolean;
if(uppercaseText===lowercaseText){
    compValue=true
    console.log(compValue)
}
else{
    compValue=false
    console.log(compValue)
}





