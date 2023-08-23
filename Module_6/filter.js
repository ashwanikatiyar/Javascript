//The filter() method is a built-in array method in JavaScript that is used to create
//a new array containing elements from the original array that satisfy a specific condition.
//It doesn't modify the original array,instead,it produces a new array with the filtered elements.


//Eg1:Filtering Even Numbers:
const numArr = [1, 2, 3, 4, 5, 6];

const evenNumbers = numArr.filter((number) => number % 2 === 0);




//Example 2: Filtering Strings by Length:
const words = ["apple", "banana", "cherry", "grape"];

const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Outputs: ["banana", "cherry"]





//Example 3: Filtering Objects by Property:
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
  ];
  
  const adults = students.filter((student) => student.age >= 18);
  console.log(adults); // Outputs: [{ name: "Alice", age: 20 }, { name: "Bob", age: 22 }]






//Example 4: Filtering Prime Numbers:

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const primeNumbers = numbers.filter(isPrime);
  console.log(primeNumbers); // Outputs: [2, 3, 5, 7]

  



//Example 5: Filtering Array of Objects by Condition:
const products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.0 },
    { name: "Grapes", price: 2.5 }
  ];
  
  const affordableProducts = products.filter((product) => product.price <= 1.0);
  console.log(affordableProducts);
  // Outputs: [{ name: "Banana", price: 0.75 }, { name: "Orange", price: 1.0 }]
  
  



