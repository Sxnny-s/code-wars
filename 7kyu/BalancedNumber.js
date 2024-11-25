// Description:
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.


function balancedNum(number){
     let numStr = number.toString()
     let middle = []
   

     if(numStr.length % 2 === 0){
        let first = (numStr.length / 2) - 1
         let second = numStr.length / 2

        middle.push(numStr[first],numStr[second]) 

       let leftNums = numStr.slice(0,first)
       let rightNums = numStr.slice(second + 1)

       leftNums = Array.from(String(leftNums), Number); 
       rightNums = Array.from(String(rightNums), Number); 

     

        let leftReduce = leftNums.reduce((a,c)=>a+c,0)
        let rightReduce = rightNums.reduce((a,c)=>a+c,0)

        if(leftReduce === rightReduce){
            return 'Balanced'
        }else{
           return 'Not Balanced' 
        }
        
     }else {
        let first = (Math.floor(numStr.length / 2)) 
        middle.push(numStr[first])

        let leftNums = Number(numStr.slice(0,first),0)
        let rightNums = Number(numStr.slice(first + 1),0)

         leftNums = Array.from(String(leftNums), Number); 
         rightNums = Array.from(String(rightNums), Number); 
         
        
        
        
        
        let leftReduce = leftNums.reduce((a,c)=>a+c,0)
        
        let rightReduce = rightNums.reduce((a,c)=>a+c,0)

        
        

        if(leftReduce === rightReduce){
            return 'Balanced'
        }else{
           return 'Not Balanced' 
        }


     }
}

const x = 554563
console.log(balancedNum(x))