// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr){
    //..
    const frequency = {}
    const answer = []
    arr.forEach(e => {
        frequency[e] = (frequency[e] || 0) + 1 
    });
    
   let counts = Object.entries(frequency)
   counts
   counts.sort((a,b) => b[1] - a[1])
   counts

    counts.forEach(e => {
        
        for (let i = 0; i < e[1]; i++) {
            // answer.push(Number(e[0]))
            answer.push((e[0]))
        }
    })


    return answer
    
  }



  const x = ['z','z','a','a',9,8,8,2,2,7,7,6,6,1,1,6]
// answer
  console.log(solve(x))