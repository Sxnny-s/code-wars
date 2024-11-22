// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function convert(s){
   let arr = s.toLowerCase().split('')

   let letterCount = {}

   arr.forEach(e => {
    letterCount[e] = (letterCount[e] || 0) + 1 ;
   });
  
   letterCount

   let answer = ''

   arr.forEach(e => {
    if(letterCount[e] > 1){
        answer += ')'
    }else{
        answer += '('
    }
   })

   answer

}

let x = 'aaAbc'
// answer )))((

console.log(convert(x))