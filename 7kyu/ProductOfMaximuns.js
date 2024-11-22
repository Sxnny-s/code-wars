// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .


function maxProduct(numbers, size){
    //your code here
    numbers.sort((a,b) => b - a)
    numbers
    let product = []

    for(let i = 0; i < size; i++){
        product.push(numbers[i])
    }
    const answer = product.reduce((a,c) => {
        return a * c
    })
    
    return answer

  }

  const x = [4, 3, 5]
  const y = 2
//   answer => 20
  console.log(maxProduct(x,y))