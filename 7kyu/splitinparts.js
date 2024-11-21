// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'


 function splitInParts(s, partLength){
    // Good Luck!

    let answer = []
    for(let i = 0; i < s.length; i += partLength){
        console.log(i)
        console.log({partLength})
        answer.push(s.slice(i , partLength + i))

    }
    return answer

  }


const x = 'hello'
const y = 2
console.log(splitInParts(x,y))

