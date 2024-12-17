// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"


function toWeirdCase(string){
    //TODO
    let answer = []
    let arr = string.split(' ')
    arr
    arr.forEach(e => {
        arr = e.split('')
        word = []
        arr.forEach((e,i,arr) => {
            if(e === arr[0] && i === 0 || i % 2 === 0){
                word.push(e.toUpperCase())
            }else if(i % 2 !== 0){
                word.push(e.toLowerCase())
            }
        })
        
        answer.push(word.join(''))
    });
    return answer.join(' ')
  }


const x = 'This is a test'
  console.log(toWeirdCase(x))