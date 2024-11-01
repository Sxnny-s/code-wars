// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.


function rowWeights(array){
    //your code here
    const team1 = []
    const team2 = []

    array.forEach((e,i) => {
        
        let index = i + 1
        index
        if(index % 2 === 0){
            team2.push(e)
        }else{
            team1.push(e)
        }
        
        let answer = []
    });
    
   let t2 = team2.reduce((a,c)=> {
    return a+c
    },0)

    let t1 = team1.reduce((a,c)=> {
        return a+c
        },0)
    

   let answer = []

   answer.push(t1)
   answer.push(t2)


   return answer
    
  }

  let x = [50,60,70,80]
    //   [120,140]
  console.log(rowWeights(x))