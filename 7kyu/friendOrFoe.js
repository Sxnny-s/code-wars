// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}


function friend(friends){
    //your code here
    return friends.filter(e => {
       return e.length == 4
    })


  }


  let x = ["Ryan", "Kieran", "Mark"]


  console.log(friend(x))