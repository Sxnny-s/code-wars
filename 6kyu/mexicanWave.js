// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


function wave(str){
    // Code here
    let arr = str.split('')
    let answer = []

    for (let i = 0; i < arr.length; i++) {
        let wave = []
        if (str[i] === ' ') continue; 
        
       arr.forEach((e,j,arr) => {
              if(j === i){
                e
                wave.push(e.toUpperCase())
            }else{

                wave.push(e)
            }
            
        
       });
       answer.push(wave.join(''))

    }
    
    return answer
  }



  const x = "he he"
//   answer ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
  console.log(wave(x))