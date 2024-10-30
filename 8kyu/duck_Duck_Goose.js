// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// Random input limits:

// 6
// ≤
// Players
// ≤
// 50
// 6≤Players≤50
// 5000
// ≤
// Position
// ≤
// 50000
// 5000≤Position≤50000

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];

function duckDuckGoose(players, goose) {
    // ...
    players.forEach(e => {
        return players[goose - 1]
        
    });


  }

  duckDuckGoose(ex_names,2)