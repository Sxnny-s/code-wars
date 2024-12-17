
// Task :
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .


function minimumNumber(numbers){
    //your code here
    function isPrime(num){
        if (num <= 1) return false;
        if (num === 2) return true;

        for(let i = 3; i * i <= num; i += 2){
            if(num % i === 0){
                return false
            }
        }
        return true
    }

    let sum = numbers.reduce((a,c)=> a+c)
    let numberToAdd = 0;

    while (!isPrime(sum + numberToAdd)){
        numberToAdd++
    }
    
    return numberToAdd

  }

  let x = [3,1,2]
//  answer 1
  console.log(minimumNumber(x))