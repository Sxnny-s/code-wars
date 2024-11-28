// Find the integer from a to b (included) with the greatest number of divisors. For example:

// divNum(15, 30)   ==> 24
// divNum(1, 2)     ==> 2
// divNum(0, 0)     ==> 0
// divNum(52, 156)  ==> 120
// If there are several numbers that have the same (maximum) number of divisors, the smallest among them should be returned. Return the string "Error" if a > b.

const divNum = (a, b) => { 

    if(a > b){
        return "Error"
    }


    let count = {}
    // possible divisors
    for (let i = 1; i <= b; i++) {
    //    every number from a - b
        for (let j = a; j <= b; j++) {
            
            if(j % i === 0){
                count[j] = (count[j] || 0) + 1
            }
        }
    }
    
    let answer = Object.entries(count).reduce((acc,current) =>{
        const [key, value] = current
        return value > acc[1] ? current : acc
        
    },['',-Infinity])
    return Number(answer[0])
 };

const x = 15
const y = 1000
console.log(divNum(x,y))