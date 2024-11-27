// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

// 8 + 1 = 9 and 92 = 81

// 512 = 5 + 1 + 2 = 8 and 83 = 512

// We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

// Examples (input --> output)
// 1 --> 81

// 2 --> 512


function powerSumDigTerm(n) {
    // your code
    let count = 0
    let answer = []
    
    for (let i = 80; i < 5000 ; i++) {
        let array = i.toString().split('')
        let sum = array.reduce((a,c) => Number(a) + Number(c),0)
        if(sum**(array.length) === i){
            count++
            answer.push(i)
        }}

        answer
        // return answer[n - 1]
    }
    


// const x = 2
console.log(powerSumDigTerm())