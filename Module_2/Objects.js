/*In JS Object  is an unordered collection of key-value pair.Each 
   Key-value pair is called a property.The key of a property can be a
   string & value can be anything (string, Number, Array and even a function)*/


var person= {
    firstName :"Ashwani",
    lastName : "Katiyar",
    age     :21,
    ownsCar:false
}

console.log(person)

//Dot Notation - This is used to access a specific value only. For this we use Dot followed by the Key)
console.log(person.age) //21


//Bracket Notation- This is used to access a specific value , using Square bracket in which we write the key in String format.
console.log(person['lastName']) //Katiyar


/* Now we shall consider an example where we will show how we can make a object containing 'ARRAY' inside as well as an 'OBJECT'.*/

var Cap= {
    First_name : 'Steves',
    Last_name : 'Rogers',
    Age : 102,

    Friends :['Bucky Barnes', 'Tony Stark','Bruce Banner'],
    isAvenger : true,
    Addesses:{
              State : "New York",
              City :  {
                   
                  Name:"Brooklyn",
                  Pincode:854283
              }

    }
}

/* Now if you want to access any nested value , for Example 'Tony Stark' ,so for  
this you may use the dot notation with the index specified in the following manner.*/

console.log(Cap.Friends[1]) //Tony Stark

console.log(Cap.Addesses.State)//New York

console.log(Cap.Addesses.City.Pincode)//854283


//How to Change values of Key

Cap.isAvenger= false
console.log(Cap.isAvenger)

//How to add a Property in an Object

Cap.Strength= 'Strong'
Cap.Movies =['Age of Ultron','First Avenger','Civil War']

//How to Delete a property in an Object

delete Cap.isAvenger

console.log(Cap) //Will print whole object (modified version)

//We can also add Functions in our object. But since we havent covered it yet, so we shall use it afterwards