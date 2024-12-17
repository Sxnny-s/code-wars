    // Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

    // For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
    // If the second string isn't a valid rotation of the first string, the method returns -1.
    // Examples:

    // "coffee", "eecoff" => 2
    // "eecoff", "coffee" => 4
    // "moose", "Moose" => -1
    // "isn't", "'tisn" => 2
    // "Esham", "Esham" => 0
    // "dog", "god" => -1

    function shiftedDiff(first,second){
        // ...
        let count = 0
       let arr1 = first.split('')
       let arr2 = second.split('')
       if(first === second){
        return 0
       }

       for (let i = 0; i < arr1.length; i++) {
        arr1.unshift(arr1[arr1.length - 1])
        arr1.pop()
        count++
        
        if(second === arr1.join('')){
            return count
        }else if(i === arr1.length -1 && second !== arr1.join('') ){
            return -1
        }
  
       }
                  
       return count
      }



    function shiftedDiff(first, second) {
        if (first.length != second.length) return -1
       let x = second + second
       x

        return (second + second).indexOf(first)
      }

      const x = 'eecoff'
      const y = 'coffee'
      console.log(shiftedDiff(x,y))