// Remove the parentheses

// In this kata you are given a string for example:

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"


function removeParentheses(s){
    s
    let open = s.indexOf('(')
    let close = s.indexOf(')')
    open
    close
    
    
}
const x = "hello example (words(more words) here) something"
// answer "hello example  something"
console.log(removeParentheses(x))