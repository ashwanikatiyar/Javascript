//Limitations of var.

//    1st

var a = 35

var a = 55 // Redeclaration of a Variable

console.log(a)

/* Since Redeclaration causes insecurity of variable's value. So it is an limitation of var. */


//    2nd

if(true){
    var b = 12
    console.log(b)
}

console.log(b) //This is also getting printed although the variable b is inside the block.

/*Observation - var keyword is not Block-scoped , that is we can access it from outside the block also.  */

function abc(){
    var c="Ashwani"
    console.log(c)
}

abc()

console.log(c) //In case of functions , this line is not getting executed

/*Observation- var keyword is not Block-scoped but it is Function-scoped. That is we cant access a variable which is defined
 in a function , from outside.*/

 // So there are two Limitations of var , 
 //1- Variable of var can be redeclared, 
 //2-var is not Block-Scoped , it is Function -scoped only 

