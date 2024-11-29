// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag (str) {
    
    str = str.trim().replace(/\s+/g, ' ');

    if(str === ''){
        return false
    }

    if(str[0] === '#'){
       var answer = []
    }else{
        var answer = ['#']
    }


    
  let arr = str.split(' ')
  arr.forEach(e => {
    
    first = e[0].toUpperCase()
    second = e.slice(1)
    answer.push(`${first}${second}`)
  });
 
  
  
  
  let string = answer.toString().replace(',','')
  
  if(string.length  > 140){
    return false
  }else{
      return answer.join('')
  }
}

const x = "#A" + "a".repeat(138)
// const x = "a".repeat(140)
// const x = "#aa"



console.log(generateHashtag(x))




