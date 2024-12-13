// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

function scoreThrows(radii){
    //Return total number of points
    return radii.length < 1 ? 0 : radii.reduce((acc,cur) => cur > 10 ? acc : cur >= 5 && cur <= 10 ? acc + 5 : cur < 5 ? acc + 10 : acc ,0) + 
        (radii.every(e => e < 5) ? 100 : 0)
  }

  const x = [1, 5, 11]
  console.log(scoreThrows(x))