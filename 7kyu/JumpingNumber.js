// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number


function jumpingNumber(n){
    //your code here
    let arr = String(n).split('')

    if(arr.length === 1){
        return "Jumping!!"
    }
  
    let check = []
    arr.forEach((e,i,arr) => {
        e
        if((Number(e) + 1) == arr[i + 1] || (Number(e) - 1) == arr[i + 1] || (Number(e) + 1) == arr[i - 1] || (Number(e) - 1) == arr[i - 1] ){
            check.push(e)
        }
    })
    let answer = Number(check.join(''))

    
    if(answer === n){
        return "Jumping!!"
    }else {
      return  "Not!!"
    }

  }

  console.log(jumpingNumber(9))