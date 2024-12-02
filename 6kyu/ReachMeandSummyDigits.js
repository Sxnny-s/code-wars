// We have the first value of a certain sequence, we will name it init_val. We define pattern list, pattern_l, an array that has the differences between contiguous terms of the sequence.  E.g: pattern_l = [k1, k2, k3, k4]


function sumDigNthTerm(initval, patternl, nthterm) {
    // your code
    let answers = [initval]
    let num = initval
    
    for(let i = 0; i < nthterm / patternl.length; i++){
        i
        for(let i = 0; i < patternl.length; i++){
        
            num += patternl[i]
            answers.push(num)
        
        }
    }
    

   let needToSum = answers[nthterm - 1]
   let sum = needToSum.toString().split('').reduce((acc,cur) => {
    return Number(acc) + Number(cur)
   })

   return sum
}

console.log(sumDigNthTerm(10, [2, 1, 3, 4], 21))