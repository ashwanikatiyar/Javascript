//Arrow functions allow us to write shorter function syntax.

//Before Arrow function

// let func1 = function(){
//     console.log(1)
// }

// let func2 = function(b){
//     console.log(b)
// }

// let func3 = function(c,d){
//     console.log(c*d)
// }

// func1()
// func2(2)
// func3(3,1)


//After Arrow Function

let func1 = () => console.log(1)


let func2 = (b) => console.log(b)


let func3 = (c,d) => console.log(c*d)


func1()
func2(2)
func3(3,1)