// ? How to define a function
//! TODO : 1 find the average of an array elements
var nums = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
var avg = 0;
for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    avg = sum / nums.length;
}
console.log(avg);
//? TODO 2 : find the greatest element from an array
var newArray = [1, 4, 3, 4.9, 9, 8, 7];
var sorted = function (arr) {
    var newSort = arr.sort();
    console.log(newSort[newArray.length - 1]);
};
sorted(newArray);
