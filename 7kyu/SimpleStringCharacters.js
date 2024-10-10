// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.

// // Good luck!

function solve(s){
    //..
    upper = 0
    lower = 0
    nums = 0
    spec = 0

    sArray = Array.from(s)

    sArray.forEach(e => {
        if(e == e.toUpperCase() && e != Number(e)){
            upper += 1
        }else if(e == e.toLowerCase() && e != Number(e)){
            lower += 1
        }else if(e == Number(e)){
            nums += 1
        }else{
            spec += 1
        }
    });

    return [upper,lower,nums,spec]

     
   }


   
   console.log(solve('CCCCcccc1'))