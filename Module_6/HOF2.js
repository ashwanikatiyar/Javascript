//Now we will solve another problem oon higher order function which is , we have an transaction array
//[1000 , 3000 , 4000 , 2000 , -878 , 3800 , -4500] convert this array into dollar transaction array

let transaction = [1000 , 3000 , 4000 , 2000 , -878 , 3800 , -4500]

let x = 80 //One USD is equal to 80 INR

// const usdTransaction = transaction.map((element) => element/x)
// console.log(usdTransaction)



//For converting the Output into whole number we will use another function which is
// toFixed()


const usdTransaction = transaction.map((element) => (element/x).toFixed(0))
console.log(usdTransaction)
