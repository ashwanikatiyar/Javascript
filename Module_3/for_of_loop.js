//The for of statement creates a loop iterating over iterable object.
//Including built-in String, Array , Array-like objects like NodeList and also map and set.

var scores =[60 , 90 , 80, 75]

for(var i in scores){
    console.log(i)
}

for(var i of scores){
    console.log(i)
}


//Strings 

var str= 'Ashwani'
for(var j of str){
    console.log(j)
}