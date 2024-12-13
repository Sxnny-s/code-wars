// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

function findSenior(list) {
    let age = []
    let answer = []
    list.forEach((e,i,arr) => {
        age.push(e.age)

    });
    let max = Math.max(...age)
    
    list.forEach((e,i,arr) => {
        if(e.age === max){
            answer.push(arr[i])
        }

    });

  return answer

  }


const x = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ]; 
  console.log(findSenior(x))