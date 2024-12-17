// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed to the function is positive
// Input >> Output Examples
// autoMorphic (25) -->> return "Automorphic" 
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .

function automorphic(n){
    //your code here
    let arr = String(n).split('')
    let square = String(n * n).split('')
    let lastSquare = square.slice(-String(n).length)
    lastSquare
    arr

    if(lastSquare.join('') === arr.join('')){
        return "Automorphic" 
    }else{
         return "Not!!"
    }
 
  }
  

  console.log(automorphic(225))