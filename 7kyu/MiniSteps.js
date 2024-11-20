// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

function minimumSteps(numbers, value){
    //your code here
    numbers.sort((a,b)=> a - b)
    let count = 0
    // const total = numbers.reduce((a,c) => {

    //     return a + c


    // },0)

    let sum = 0
    console.log(numbers)
    for(let i = 0; i < numbers.length; i++){
        console.log({sum})


        if(sum < value){
            
            sum += numbers[i]

            if(i !== 0){

                count += 1
                console.log({count})
            }

        }        
    }
    
    return count  
  }




  const x = [3,3,4,5,7,8,9,10,22,31,49,50,68,98,99]
  const y = 200
  console.log('answer: ',minimumSteps(x,y)) 

//   answer == 11


console.log({y})
console.log({y}.y)