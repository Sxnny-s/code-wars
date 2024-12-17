// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){

    let sections = []

    if(str.length % 2 === 0){
        for (let i = 0; i < str.length; i += 2) {
            sections.push(str.slice(i,i + 2))
        }
        return sections
    }else{
        str = str + '_'
        for (let i = 0; i < str.length; i += 2) {
            sections.push(str.slice(i,i + 2))
        }
        return sections
    }
   
}



const x = 'abcde'
console.log(solution(x))