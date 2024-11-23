// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

function maxTriSum(numbers){
    //your code here
    const mySet = new Set()
    numbers.sort((a,b) => a-b)
    
    numbers.forEach(e => {
    mySet.add(e)
   });
   
   let arr = Array.from(mySet)

   
   let triple = arr.reverse().slice(0,3)
   let sum = triple.reduce((a,c)=> a+c)

   return sum

  }

  let x = [3,2,6,8,2,3]
//   answer 17
  console.log(maxTriSum(x))