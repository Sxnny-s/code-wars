// Description:

// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card?
// Bingo Cards

// A Bingo card contains 24 unique and random numbers according to this scheme:

//     5 numbers from the B column in the range 1 to 15
//     5 numbers from the I column in the range 16 to 30
//     4 numbers from the N column in the range 31 to 45
//     5 numbers from the G column in the range 46 to 60
//     5 numbers from the O column in the range 61 to 75

// Task

// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]

// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random. 

function getCard() {
    // Start your coding here...
    let prefixes = ['B','I','N','G',"O"]

    function RNG(a,b,c,l){
        line = []
        const mySet = new Set
        while(mySet.size < c){
            mySet.add(Math.floor(Math.random() * (b - a)  + a ))
        }
        arr = [...mySet]
        arr.forEach(e => {
          line.push(l + e.toString())
        });

      return line
    }
    let answer = []

    let line1 = RNG(1,15,5,'B')
    let line2 = RNG(16,30,5,'I')
    let line3 = RNG(31,45,4,'N')
    let line4 = RNG(46,60,5,'G')
    let line5 = RNG(61,75,5,'O')

    answer.push(line1,line2,line3,line4,line5)
   return answer.flat()
}



console.log(getCard())