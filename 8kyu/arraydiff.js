function arrayDiff(a, b) {
  let answer = []
aSum = a.reduce((acc,cur) => {
    return acc + cur
})

bSum = b.reduce((acc,cur) => {
    return acc + cur
})

answer = answer.push(aSum)

}


let w = [1,2]
let i = [5,5]

console.log(arrayDiff(w,i))