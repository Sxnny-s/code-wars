// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


function isValidWalk(walk) {
    //insert brilliant code here
    return walk.length === 10
        && 0 ==  walk.reduce((acc,cur)=> acc + (cur === 'n' ? 1 :( cur === 's' ? -1 : 0)),0)
        && 0 ==  walk.reduce((acc,cur)=> acc + (cur === 'e' ? 1 :( cur === 'w' ? -1 : 0)),0)
  }


  const x = ['n','s','n','s','n','s','n','s','n','s']
  
  console.log(isValidWalk(x))