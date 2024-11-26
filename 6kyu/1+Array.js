// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays

// [] is invalid because it is empty
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer


function upArray(arr){
    // ... 

    let negative
    let dobleDigit

    arr.forEach(e => {
        e
        if(e < 0){
            negative = 'nil'
        }
    })

    arr.forEach(e => {
        e
        if(e > 9){
            dobleDigit = 'nil'
        }
    })


    if(arr.length === 0 || negative === 'nil' || dobleDigit === 'nil'){
        return null
    }
  
    




    if(arr[0] === 0 && arr.length > 1){

        if(arr.length > 17 && arr[0] === 0){
            let numStr = arr.join('');
            let bigNum = BigInt(numStr)
            let plusOne = bigNum + 1n
            let plusOneStr = plusOne.toString();
            plusOneStr = 0 + plusOneStr
            
            let bigArr = plusOneStr.split('')

            let numsArray = bigArr.map(e => {
                return Number(e) 
            })

            return numsArray 
        }

        if(arr.length > 17){
            let numStr = arr.join('');
            let bigNum = BigInt(numStr)
            let plusOne = bigNum + 1n
            let plusOneStr = plusOne.toString();
            let bigArr = plusOneStr.split('')

            let numsArray = bigArr.map(e => {
                return Number(e) 
            })

            return numsArray 
        }

        let num = Number(arr.join(''))
        
        let  plusOne = num + 1

       plusOne = 0 + plusOne.toString()

       let arr1 = plusOne.split('')
       
       let numsArray = arr1.map(e => {
           return Number(e) 
       })
       return numsArray
    }else{
        arr
        if(arr.length > 17){
            let numStr = arr.join('');
            let bigNum = BigInt(numStr)
            let plusOne = bigNum + 1n
            let plusOneStr = plusOne.toString();
            let bigArr = plusOneStr.split('')

            let numsArray = bigArr.map(e => {
                return Number(e) 
            })

            return numsArray
            
        }

        let num = arr.join('')

        num
        
        let  plusOne = (Number(num) + 1).toString().split('')

        num
        console.log(Number(num))


       let numsArray = plusOne.map(e => {
           return Number(e) 
       })

       return numsArray
    }
};
    

  const x = [0,9,2,9,4,8,5,3,9,7,6,6,8,0,2,5,8,6,8,3,9,0,1,3]
  console.log(upArray(x))



