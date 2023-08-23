/*Lets write a function where we are given with an number and 
we need to check whether the square of that number is even*/

//THis the old conventional manner of writing the code. The imperative manner
let evenSq1 = (a) => {
    var c = a**2
    if (c%2==0){
        console.log('Square of '+ a+" is "+c+ " Even")
    }
    else{
        console.log('Square of '+ a+" is "+c+ " Odd")
    }
}

evenSq1(5)
evenSq1(10)

//---------------------------------------------------------------------
//The Declarative manner

let evenSq2 = (x) => ((x**2)%2===0 ? "Even" : "Odd")

console.log(evenSq2(4))
console.log(evenSq2(3))

//Another way

let evenSq3 = (x) => ((x**2)%2===0 ? true : false)

console.log(evenSq3(4))
console.log(evenSq3(3))