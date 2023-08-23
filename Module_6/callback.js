
// function firsthalf( a , cb){
//     console.log(a)
//     cb("Bhamya")
// }

// firsthalf("Ashwani", secondhalf)



// function secondhalf(b){
//     console.log(b)
// }


// Question 1 (Beginner):
// Write a function calculate that takes three arguments: two numbers and a callback function. 
// The callback function should perform an operation on the two numbers.
//  Call the callback function with the two numbers as arguments and return the result.

// Solution

function calculate(num1 , num2 , callback){
    callback(num1,num2 )
    console.log()
}



function operation(num1 , num2){
   let c = num1+num2
   console.log(c)
}

 calculate(2 , 3 ,operation)



// Question 2(Intermediate)
// Create a function filterArray that takes an array of numbers and a callback function.
// The callback function should return true for even numbers and false for odd numbers.
// Implement filterArray to return a new array containing only the even numbers.


function filterArray(arr,cb){      
      cb(arr)
}

function evenodd(array){
    let evenarray =[]
    for(var i of array){
       if(i%2===0){
          evenarray.push
       }      
    }
     console.log(evenarray)
}
let array = [1,2,345,3,53,45,346,12,45,6,45,235,45,78,6789,56]

filterArray(array , evenodd)