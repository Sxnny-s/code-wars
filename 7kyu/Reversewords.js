// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    let answer = ''

    str.split(' ').forEach((e,i,arr) => {
        let x = e.split('').reverse().join('')
       
        
       answer += `${x}`

    

    });
    return answer.trim()
  }

  let x = "double  spaces"

    //   answer "sihT si na !elpmaxe"

  console.log(reverseWords(x))