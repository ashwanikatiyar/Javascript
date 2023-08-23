//1. some() Method:
//The some() method tests whether at least one element in the array satisfies a given condition. 
//It returns true if any element matches the condition, and false if no element matches.

const numbers = [1, 2, 3, 4, 5, 6];

const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log("Has even number:", hasEvenNumber);


//2. every() Method:
//The every() method tests whether all elements in the array satisfy a given condition. 
//It returns true if all elements match the condition, and false if at least one element does not match.

const ages = [25, 30, 22, 28, 35];

const allAdults = ages.every((age) => age >= 18);
console.log("Are all adults:", allAdults);