// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
   let answer = []
   let x = s.split('')

   x.forEach((e,i) => {
    let y = e.toUpperCase() + e.toLowerCase().repeat(i)

    answer.push(y)

   });

   return answer.join('-')



  
  }

let x = "aaaz"
  console.log(accum(x))