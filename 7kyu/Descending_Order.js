// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
    
    let numArray = n.toString().split('')
    numArray.sort((a, b) => b - a);
    let answer = numArray.join('');
    return Number(answer);
  }
let x = 1234
descendingOrder(x)