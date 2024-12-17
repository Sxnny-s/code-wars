// Description:
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year){
  // code must go here
    let century = Math.ceil(year / 100) 
    century
    let num = year % 100

    
    if(num === 11 ||num === 12 ||num === 13){
      return century.toString() + 'th'
    }else if(num){

    }
    
    

}

console.log(whatCentury(2012))

