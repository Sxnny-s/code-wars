let str = "ors 4243"

function spinWords(string){
    //TODO Have fun :)
       words = string.split(' ')
      answer = ''
      test = words.forEach(e => {
        if(e.length >= 5){
            x = e.split('').reverse().join('')
            answer += x + ' '
          }else{
              answer += `${e}` + ' '
          }
      });
      return answer.trim()
  }


console.log(spinWords(str))
console.log(spinWords(str).length)