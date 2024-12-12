// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

//     Empty string values should be ignored.
//     Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

function formatWords(words){
  words
  let formatWords = []
  words.forEach(e => {
    if(e === null || Array.isArray(e) && e.length <= 1 ){
        formatWords.push('')
    }else if(e){
        formatWords.push(e)
    }
  });

  formatWords[formatWords.length - 2] = 'and'
 formatWords
}



const x = ['ninja', 'samurai', '', null, ['']]
console.log(formatWords(x))