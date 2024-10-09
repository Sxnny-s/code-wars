
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    // ...
   let numArray = numbers.split(' ')

   min = numArray.reduce((acc, cur) => {
    return Math.min(Number(acc),Number(cur))
   })


   max = numArray.reduce((acc, cur) => {
    return Math.max(Number(acc),Number(cur))
   })

   return `${max} ${min}`


  }

  let z = '1 2 3 4 5 6'

  console.log(highAndLow(z))