// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

function tidyNumber(n){
    //your code here
        let arr = String(n).split('')
    
        if(arr.length === 1){
            return true
        }
      
        let check = []
        arr.forEach((e,i,arr) => {
            e
            
            if(Number(e) <= arr[i + 1] && arr[arr.length - 1] >= arr[i - 1]  ){
                check.push(e)
            }
        })
        let answer = Number(check.join(''))
        check
        
        if(answer === n){
            return true
        }else {
          return  false
        }
    
      }





  console.log(tidyNumber(1834514))