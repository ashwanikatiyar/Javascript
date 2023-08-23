/*In JS , the for-in loop allows us to loop through the properties of an object.
The Statement of the code found within the loop body will be executed once 
for each property of the object.*/

var color ={ primary: `Red`,
             second :`Blue`,
             tertiary:`Green`
}

for(var i in color){
      console.log(color[i])
}

//Better Version of Output

for(var i in color){
    console.log(i + '->'+ color[i])
}

/*-------------------------------------------------------------------------------------------*/

var colorsArray= [`Red`,`Blue`,'Yellow','Green']

for(i in colorsArray){
    console.log(colorsArray[i])
}