// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22


function minSum(arr) {
    // your code here
    arr.sort((a,b) => a-b)
    let sum = 0
    arr
    for( let i = 0 ;i < arr.length / 2; i++){
        console.log(arr[i])
        console.log(arr[arr.length - 1 - i])

        sum += arr[i] * arr[arr.length - 1 -i]
        
        
    }

    return sum
  }



  let x = [5,4,2,3]
    // answer 22
  console.log(minSum(x))