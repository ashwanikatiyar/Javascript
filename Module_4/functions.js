
//Now lets play with some very basic functions and learn how to make and call them.

function add(a ,b){
    var c =a+b
    console.log('Sum of a and b is:',c)
}

function diff(a,b){
    var c=0

    if(a>b)
    {
        c=a-b
        console.log('Diff of a and b is:',c)
    }

    else if(a==b){
        console.log(0)
    }

    else
    {
        c=b-a
        console.log('Diff of a and b is:',c)
    }
}

function product(a,b){
    var c= a*b
    console.log('Product of a & b is: ',c)
}

add(5,6)
diff(10,5)
product(7,2)

//--------------------------------------------------------------------------------------------------
//So as we have seen how to use functions, now lets do few easy operations on them


var Addition = function(a,b){
               
          var c=a+b
          console.log(c)
}
/*Now call 'Variable' Addition with values of a and b. Now here why am I calling variable , not function
  because since the function inside variable Addition isnt having any name , that is , its anonymous. And since it is stored 
  inside a variable so we can call this variable for our purpose.*/

Addition(2,2) //Output = 4

//-------------------------------------------------------------------------------------------------------------------------------------


//Lets do some more modification 

var Addition1 = function(a,b){
               
    return a+b
}
var w = Addition1(3,6)
console.log(w) 

//What happend here is , we used 'return' which Bhamya is Aware of , na??... Return is use to
//give the overall output of any function. Also we assigned another variable for storing the 
// output of the Function.

//---------------------------------------------------------------------------------------------------------------------------------------








