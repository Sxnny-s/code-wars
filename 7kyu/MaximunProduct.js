// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .


function adjacentElementsProduct(array) {
    let products = []
    products.push(array[0] * array[1])
    array.forEach((e,i,arr) => {
        let next = arr[i + 1]
        let nextNext = arr[i + 2]
        if(next * nextNext){
            products.push(next * nextNext)
        }
        
    });
    let answer = Math.max(...products)
    return answer
  }


let x = [4, 12, 3, 1, 5]
// answer 48
  console.log(adjacentElementsProduct(x))