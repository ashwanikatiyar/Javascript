//Loops are the statements used to control the flow of the program and to some repeatatives

var a = 'Heyy Ashwani'

//The for Loop
//Eg 1 ---------------------------------------------------------------------------------------
for(var i=0 ; i<10 ; i++){
    console.log(a)
}

//--------------------------------------------------------------------------------------------

//Eg 2 - Square the elements of a given Array and print the modified Array.

var arr=[2,3,4,5,6,7,8]
var sq_arr=[] //empty array

for(var i=0; i<arr.length; i++){
      sq_arr[i]=arr[i]**2
}
console.log(sq_arr)