// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .const

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

function maxGap (numbers){
    //your code here
    numbers.sort((a,b) => a - b)
    const possibleAnswers = []

    numbers

    for(let i = 0; i < numbers.length - 1; i++){
        let first = i
        
        let second = i + 1
        

        let difference = numbers[second] - numbers[first]
        
        possibleAnswers.push(difference)
        

    }

    possibleAnswers
    let answer = Math.max(...possibleAnswers)
    return answer
  }


  let x = [13,10,2,9,5]
//   expected out put 4
  console.log(maxGap(x))