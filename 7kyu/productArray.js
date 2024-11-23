// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 20 is the product of all array's elements except the first element

// The second element 12 is the product of all array's elements except the second element .

function productArray(numbers){
    //your code here
    let answers = []
    
    product = numbers.reduce((a,c) => a*c)

    numbers.forEach(e => {
      answers.push(product / e)
    });
    
   return answers

  }


  let x = [4, 6, 8, 5, 23, 4, 7, 68, 12, 7]
    //answer   [216,24,162,324]
  console.log(productArray(x))