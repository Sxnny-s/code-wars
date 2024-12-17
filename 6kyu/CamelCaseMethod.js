// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


function camelCase(x){
    //your code here
    let arr = x.split(' ')
    let answer = []
    arr.forEach(e => {
        e
        let camel = e[0].toUpperCase()
        
        arr = e.split('')
        arr[0] = camel
        word = arr.join('')
        answer.push(word)
    });
   return answer.join('')
    
  }

const x = "camel Case method"
console.log(camelCase(x))