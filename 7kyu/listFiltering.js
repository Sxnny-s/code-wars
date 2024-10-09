// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
    num = l.filter((e) =>{
        return Number.isInteger(e)
    })
     console.log(num)
  }


  x = [1,2,'a','b']

  filter_list(x)