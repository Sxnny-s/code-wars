// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1



function countRepeats(str) {
    // code solution
    console.log(str)
    let strArray = str.split('')
    console.log(strArray)
    for(i=0; i<strArray.length; i++){
        if(strArray[i] == strArray[i+1]){
            console.log(strArray.splice(i,1))
            console.log(strArray)
        }
    }
    
}



let x = 'abbcca'
console.log(countRepeats(x))


