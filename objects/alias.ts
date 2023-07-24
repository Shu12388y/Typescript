//? we define types when we have same property in different objects



type persons={
    name:string,
    address:string,
    phoneNumber:number,
    about:string
    id?:number                      //? if we want to and optional class we use "?"

}

const person1:persons={
    name:"shubham",
    address:"India",
    phoneNumber:89099232,
    about:"software eng."
}


const person2:persons={
    name:"shubham",
    address:"India",
    phoneNumber:89099232,
    about:"software eng.",
    id:2
}


//? pratice make an object of products and make a function that return a total price


type product={
    name:string,
    price?:number,
    id?:number
}

const appleProducts:product={
    name:"Iphone 12",
    price:120000,
    id:Math.floor(Math.random()*1290)
}

const samsungProducts:product={
    name:"galaxy s20",
    price:140000,
    id:Math.floor(Math.random()*1290)
}

const oneplusProducts:product={
    name:"one plus 12",
    id:Math.floor(Math.random()*1290)
}



//? make a functio that return a price 

const priceReturn=(obj)=>{
    if(obj.price){

        console.log(obj.price)
    }

    console.log("price is not present")

}

   

priceReturn(oneplusProducts)
