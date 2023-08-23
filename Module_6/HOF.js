//Let me ask you a simple ques , find out the square of each element of the given array.[1,2,3,4,5]

let arr = [1,2,3,4,5]
// let temparr=[]
// let count=0
// for(var i of arr){
//     temparr[count]=i*i
//     count++
// }

// console.log(temparr)


//Now lets do it using Map function which is an Higher Order Function
// function is a higher-order function that operates on arrays.
// It allows you to transform each element of an array by applying
// a provided function to it, and it returns a new array containing
// the results of applying the function to each element.
// The original array remains unchanged.

let squaredArr= arr.map(function(n){
      return n*n
} )

console.log(squaredArr)


