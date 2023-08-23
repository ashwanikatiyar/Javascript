//Now lets talk about another type of Higher Order funtion forEach() which works similer to 
//map() function but unlike map() function it doesnt create a new array.
//It simply executes the provided function for each element in the existing array

// array.forEach((currentValue, index, array) => {
//     // Perform an operation using currentValue
//   });

let fruits = ['Apple' , 'Banana' , 'Grapes' , 'Mango' , 'Lichi']

fruits.forEach((element,index,array)=>{
       console.log(element)
})


//Eg 2: Modifying an array
const prices = [10, 20, 30, 40];

prices.forEach((price, index, array) => {
  array[index] = price * 1.1; // Increase each price by 10%
});

console.log("Modified Prices:", prices);


//Eg 4: Extracting Properties
// You can extract specific properties from an array of objects using the forEach() function:

const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
  ];
  
  const names = [];
  
  students.forEach((student,index,array) => {
    names.push(student.name);
  });
  
  console.log("Names:", names);