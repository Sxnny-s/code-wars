// The main part of this game is merging identical tiles in a row.

//     Implement a function that models the process of merging all of the tile values in a single row.
//     This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
//     A given tile can only merge once.
//     Empty grid squares are represented as zeros.
//     Your function should work on arrays containing arbitrary number of elements.

// Examples

// merge([2,0,2,2])  -->  [4,2,0,0]

// Another example with repeated merges:

// merge([4,4,8,16])  -->  [8,8,16,0]
// merge([8,8,16,0])  -->  [16,16,0,0]
// merge([16,16,0,0]) -->  [32,0,0,0]

function merge(line) {
    //Function that merges a single row or column in 2048.
    let size = line.length
    
    line = line.filter(e => e != 0)

    let answer = []
    for (let i = 0; i < line.length; i++) {
        if(line[i] === line[i + 1]){
            answer.push(line[i] + line[i])
            i++
        }else{
            answer.push(line[i])
        }}

    let zeros = size - answer.length
    zeros

    for (let i = 0; i < zeros; i++) {
        answer.push(0)
    }
    return answer
  
  };


  const x = [2,0,2,4]

// answer  [4,2,0,0]
  console.log(merge(x))