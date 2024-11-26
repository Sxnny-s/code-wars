// Description:
// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [1:5] .

// specialNumber(9) ==> return "NOT!!"
// Explanation:
// Although, it's a single-digit number but Outside the interval [1:5] .

// specialNumber(23) ==> return "Special!!"


function specialNumber(n){
    //your code here
    const regex = /[012345]/
    let arr = String(n).split('')
    let answer = []
    arr.forEach(e => {
        if(regex.test(Number(e))){
           answer.push(e)
        }
    })

    if(answer.length === arr.length){
        return "Special!!"
    }else{
        return "NOT!!"
    }
  }


  console.log(specialNumber(11))