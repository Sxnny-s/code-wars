// Definition
// Extra perfect number is the number that first and last bits are set bits.

// Task
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

// Input >> Output Examples
// extraPerfect(3)  ==>  return {1,3}
// Explanation:
// (1)10 =(1)2
// First and last bits as set bits.

// (3)10 = (11)2
// First and last bits as set bits.


function extraPerfect(n){
    //your code here
    
    let answer = []
    for (let i = 1; i <= n; i += 2) {
        answer.push(i)
        
    }

    return answer
  }


  console.log(extraPerfect(39))