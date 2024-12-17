// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"


function abbreviate(string) {
    let answer = []
    let answer1 = []
    
    

    // let arr = string.split(/[\s-]/)
    let arr = string.split(' ')

    arr
    
     arr.map((e,i,arr)=>{

        if(e.includes(',')){
            let commaIndex = e.indexOf(',');
            let wordBeforeComma = e.slice(0, commaIndex);  
            let wordAfterComma = e.slice(commaIndex); 
            
            
            if (wordBeforeComma.length >= 4) {
                wordBeforeComma = wordBeforeComma[0] + (wordBeforeComma.length - 2) + wordBeforeComma[wordBeforeComma.length - 1];
            }
            answer.push(wordBeforeComma + wordAfterComma);
        }else if(e.includes('-')) {
           e = e.split('-')
            e.forEach((e,i,arr) => {
                e
                let word = []
            
                let first = e[0]
                first
                
                let middle = e.length - 2
                
                middle
                let last = e[e.length - 1]
                last

                word.push(first,middle,last)
                word
                let answer2 = word.join('')
                answer1.push(answer2)
                answer1
               let x = answer1.join('-')
               x
               x = x.split(' ')
               x
               e
               if(e !== arr[0]){
                   answer.push(x)
               }
            });   
        }else if(e.length >= 4){
            let word = []
            e
            let first = e[0]
            
            let middle = e.length - 2
            
            let last = e[e.length - 1]
           
            word.push(first,middle,last)

            let answer2 = word.join('')
            answer.push(answer2)
        }else{
            answer.push(e)
        }
    })

    return answer.join(' ')
  }


  console.log(abbreviate("You need, need not want, to complete this code-wars mission"))
//  answer => 'b5n cat d4e-b6d d4e-b6d'