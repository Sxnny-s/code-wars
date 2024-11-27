// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.


function deepCount(a){
    //...
    a

    let count = 0
    function nest(x){
        x.forEach(e => {
            if(Array.isArray(e)){
                nest(e)
            }
        })
    }


    a.forEach(e => {
        if(Array.isArray(e)){
            e
            count++
        }else {
            count++
        }
        
    });
    count
  }

  const x = [1, 2, [3, 4, [5]]]
//   answer 7
  console.log(deepCount(x))