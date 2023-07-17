// ? How to define a function

//! TODO : 1 find the average of an array elements

let nums:Array<number>=[1,2,3,4,5,6,7];
let sum:number=0;
let avg:number=0;
for(let i:number=0;i<nums.length;i++){
    sum=sum+nums[i];
    avg=sum/nums.length;
    
}
console.log(avg);



//? TODO 2 : find the greatest element from an array

let newArray=[1,4,3,4.9,9,8,7]


const sorted=(arr:Array<number>)=>{
  let newSort:Array<number> = arr.sort()
  console.log(newSort[newArray.length-1])

}

sorted(newArray)