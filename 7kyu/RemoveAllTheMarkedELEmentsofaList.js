// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]


// function rm (integer_list, values_list){
//     //your code here
//     const answer = []
    
//     integer_list.forEach(e => {
//         if(!values_list.includes(e)){
//             answer.push(e)
//         }
//     });


//     return answer
    
    
//   }



// function rm (integer_list, values_list){
//     //your code here
//    return integer_list.filter(e => !values_list.includes(e))
    
    
//   }


function rm (integer_list, values_list){
    //your code here
   const answer = []

    for(let i = 0; i < integer_list.length; i++){
       
        if(!values_list.find(e => integer_list[i] === e)){
            answer.push(integer_list[i])
        }

    }
    
    return answer
   
  }




const x = [1, 1, 2, 3, 1, 2, 3, 4]
const y = [1, 3]

// [2, 2, 4]

  console.log(rm(x,y))