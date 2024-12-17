function queueTime(customers, n) {
    //TODO
    let tills = new Array(n).fill(0)
    tills
    
    customers.forEach(e => {
        lowestIndextill = tills.indexOf(Math.min(...tills)) 

        tills[lowestIndextill] += e
    });

    tills

    return Math.max(...tills)
    
  }

  let x = [2,2,3,3,4,4]
  let y = 2
//   answer 9
console.log(queueTime(x,y))
