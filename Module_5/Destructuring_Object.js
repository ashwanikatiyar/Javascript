//Object Destructuring- This is a bit different from Array Destructuring , Let see How.

let myObj= {
    Name : 'Ashwani' ,
    Age : 21 ,
    Gender : "Male"
}

//Let try accessing them as we did previously in Array

let { x , y , z } = myObj

console.log(x)
console.log(y)
console.log(z)

//As we can see that output is Undefined. 
//This shows that we cant access object elements(values) directly as we did in arrays---------------------------------------------------------

//For Accessing values we can do it in the following manner

let{ Name , Age , Gender} = myObj

console.log(Name)
console.log(Age)
console.log(Gender)

//It works Right !!

//But I know this wasnt that interesting , as who will be liking it to write 'Name' , 'Age' ,'Gender' 100 times if needed.
//So for this I am here to help you out. I will do few changes in the above code and you wont need to write Keys name everytime.

let {Name : n , Age :a , Gender :g} = myObj

console.log(n)
console.log(a)
console.log(g)

//I hope you find this a bit interesting now. Try keeping all this in your mind by revising.

// I guess you will be a little disappointed if i tell you that , our problem isnt solved yet. Yes
// What if we have a nested object. Then how will you access the valuee from it. Lets see how its done

let myObj2= {
    Name2 : 'Ashwani' ,
    Age2 : 21 ,
    Gender2 : "Male",

    Address : {
        Country : "Spain",
        City  :   "Madrid"
    }
}

let {Name2:n2  , Age2:a2 , Gender2:g2 , Address:{Country :c2}} = myObj2

// console.log(c2)

let obj3 = myObj2

obj3.Address.Country = "test"

console.log(myObj2.Address.Country)








