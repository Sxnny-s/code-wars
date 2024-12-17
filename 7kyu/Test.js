function isPalindrome(str){
    // input => str
    // return => bool
    // input mom => true
    

    let str1 = str.toLowerCase()

    let arr = str1.split('')
    let arrReverse = arr.slice().reverse()
    
     return arr.join('') === arrReverse.join('')

}

console.log(isPalindrome('mom'))