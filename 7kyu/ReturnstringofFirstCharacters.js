// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"


function makeString(s){
    // ...
    const answer = []
    let arr = s.split(' ')

    arr.forEach(e => {
        answer.push(e[0])
    });

    return answer.join('')
  }

  let x = "This Is A Test"
  console.log(makeString(x))