function partlist(arr) {
    // your code
    const answer = []

    for(let i = 1; i < arr.length; i++){

        let firstPart = arr.slice(0,i).join(' ')
        let secondPard = arr.slice(i).join(' ')

        answer.push([firstPart, secondPard])
         
    }
  return answer
}




const x = ["I", "wish", "I", "hadn't", "come"]

console.log(partlist(x))



// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]