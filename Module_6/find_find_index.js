//1. find() Method:
//The find() method is used to find the first element in an array that satisfies a given condition.
//It returns the value of the first element that matches the condition, or undefined if no matching element is found

const numbers = [1, 2, 3, 4, 5, 6]

const evenNumber = numbers.find((number) => number % 2 === 0)
console.log("First even number:", evenNumber)

const evenNumberindex = numbers.findIndex((number) => number % 2 === 0)
console.log("Index of First even number:", evenNumberindex)
