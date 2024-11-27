
// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// a
// ,
// b
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []

function sumDigPow(a, b) {
    // Your code here
    let answer = []
    let nums = []
    for (let i = a; i <= b; i++) {
        
        nums.push(i)
    }

    nums.forEach((e,i,arr) => {
        if(e <= 9){
            answer.push(e)
        }else{
            let sum = 0
            let num = e
          let array = e.toString().split('') 

          array.forEach((e,i,arr)=>{
            sum += Number(e)**(i+1)
          })

          if(sum === num){
            
            answer.push(sum)
          }
            }
            
            
        
    })


    return answer

  }
  
  console.log(sumDigPow(10,150))