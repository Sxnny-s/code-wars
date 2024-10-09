// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
    let answer = 0
    sumOfEven = arr.forEach(e => {
        if(e > 0){
          answer += e
        }

        
    });
    console.log(answer)
  }



  let x = [1,2,3,-5]

  positiveSum(x)