// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zero = []
    arr.forEach(e => {
        e === 0 ? zero.push(e) : e
    });
    const filteredArr =  arr.filter(e => e !== 0)
    return filteredArr.concat(zero)
  }


  const x = [1,2,0,1,0,1,0,3,0,1]
  console.log(moveZeros(x))