// Description:
// Give you a array arr that contains some numebers. Numbers can be positive,negative,integer or float. Only one of these numbers is unique. Find and return it.

// Some examples:
// findUnique([1,2,3,5,7]) === 2
// Because only 2 is an even number, the other numbers are odd.

// findUnique([2,4,6,8,9]) === 9
// Because only 9 is an odd number

// findUnique([2,-4,6,8]) === -4
// Because only -4 is a negative number

// findUnique([-2,-4,-6,8]) === 8
// Because only 8 is a positive number

// findUnique([2,4.4,6,8]) === 4.4
// Because only 4.4 is a float number

// findUnique([2.2,4.4,6.6,8]) === 8
// Because only 8 is a integer number

// findUnique([2,2,2,4]) === 4
// Because only 4 has a diffrent value
// Priority level: float/integer > positive/negative > odd/even > diffrent value


function findUnique(arr){
    //coding and coding..
    function isEven(array){
        let even = []
        arr.forEach(e => {
            if(e % 2 === 0){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isOdd(array){
        let even = []
        arr.forEach(e => {
            if(e % 2 !== 0){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isNeg(array){
        let even = []
        arr.forEach(e => {
            if(e < 0){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isPos(array){
        let even = []
        arr.forEach(e => {
            if(e > 0){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isFloat(array){
        let even = []
        arr.forEach(e => {
            
            if(!Number.isInteger(e)){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isInt(array){
        let even = []
        arr.forEach(e => {
            if(Number.isInteger(e)){
                even.push(e)
            }
        });
        if(even.length === 1){
            return Number(even)
        }else{
            return false
        }
    }

    function isDiff(array){
        arr
        let count = {}
        arr.forEach(e => {
            count[e] = (count[e] || 0) + 1
        });
        count
        for(let key in count){
            if(count[key] === 1){
                return Number(key)
            }
        }
        
    }
    if (isFloat(arr)) {
        return isFloat(arr);
    } else if (isInt(arr)) {
        return isInt(arr);
    } else if (isPos(arr)) {
        return isPos(arr);
    } else if (isNeg(arr)) {
        return isNeg(arr);
    } else if (isEven(arr)) {
        return isEven(arr);
    } else if (isOdd(arr)) {
        return isOdd(arr);
    } else {
        return isDiff(arr);
    }
    
    
    
  }

  const x = [-2,-4,-6.6,8]
console.log(findUnique(x))