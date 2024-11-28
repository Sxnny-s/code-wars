// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7


function deepCount(a){
    //...
    a
    return a.reduce((acc,cur) => {
        if(Array.isArray(cur)){
           return acc + 1 + deepCount(cur)
        } else {
            return acc + 1
        }
    },0)
    
  }

  const a = ["x", "y", ["z"]]
  console.log(deepCount(a))