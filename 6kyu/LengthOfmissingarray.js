// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
    
    if (arrayOfArrays === null){
        return 0
    }
    if(arrayOfArrays.includes(null)){
        return 0
    }
    


    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length === 0 || arrayOfArrays.some(arr => arr === null || arr.length === 0)) {
        return 0;
    }

    arrayOfArrays.sort((a,b)=> a.length - b.length)

    arrayOfArrays
    let consecutive = []
    let missing = []


    arrayOfArrays.forEach(e => {
       consecutive.push(e.length)
    });

    consecutive

    consecutive.forEach((e,i,arr) => {
        e
        if(e + 1 !== arr[i + 1] && e !== arr[arr.length - 1]){
            missing.push(e + 1)
        }
    })

    if(consecutive.includes(0)){
        return 0
    }

   return Number(missing.join(''))

  }
  



  const x = [[1, 2], null, [1, 2, 3]]

  console.log(getLengthOfMissingArray(x))