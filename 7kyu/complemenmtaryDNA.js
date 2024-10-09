// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dnaStrand(dna){
    dnaArray = dna.split('')
    answer = ''
    sub = dnaArray.forEach(e => {
        if(e == "G"){
            answer += 'C'
        }else if(e == "T"){
            answer += 'A'
        }else if(e == 'A'){
            answer += "T"
        }else if(e == "C"){
            answer += 'G'
        }
    });

    return answer

  }

  console.log(dnaStrand('GTAT'))