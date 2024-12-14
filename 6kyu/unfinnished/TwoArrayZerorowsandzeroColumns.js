// Description:

// Given two 2D integer array arr1 and arr2. They have the same numbers of rows and columns. For example:

//  arr1 = [[1, 3,-5],       arr2 = [[-1,-3, 5],
//         [2,-4, 6]]               [-2,-4,-6]]

// Then plus two integers of the same position of two array. We can got a new array:

// [[0, 0, 0],
//   [0,-8, 0]]

// Your task is to count the number of zero rows and zero columns(all elements are zero in a row or column).

// In the example above, the result is 3(row 0, column 0, and column 2).


function countZeroRowsAndColumns(arr1,arr2){
    //coding and coding..
    let columnLength = arr1[0].length
  
    let check1 = 0
    let check2 = 0
    let check3 = 0
    
    let count = 0

    for (let i = 0; i < columnLength; i++) {
       check1 += arr1[0][i] + arr2[0][i]
       check2 += arr1[1][i] + arr2[1][i]
       
       //  colume check
        check3 += arr1[0][i] + arr1[1][i] + arr2[0][i] + arr2[1][i] 
        check3 === 0 ? count++ : ''
        check3 = 0
      }
      
      check1 === 0 ? count++ : ''
      check2 === 0 ? count++ : ''
      
      return count

  }

  const x = [[1, 3,-5],
            [2,-4, 6]]

  const y = [[-1,-3, 5],
            [-2,-4,-6]]
  console.log(countZeroRowsAndColumns(x,y))