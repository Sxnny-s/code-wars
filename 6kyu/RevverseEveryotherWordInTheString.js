// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


function reverse(str){
    //WRITE SOME MAGIC
    let arr = str.split(' ')
    arr
    let answer = arr.map((e,i,arr) => {
        if(i % 2 === 0){
            return e
        }else{
            return e.split('').reverse().join('')
        }
    })
    return answer.join(' ').trim()
  }

  const x = "Reverse this string, please!"
//   answer "Reverse siht string, !esaelp"
  console.log(reverse(x))