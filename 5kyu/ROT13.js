// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"


function rot13(str) {
    let arr = str.split('')
    let answer = []
    arr
    arr.forEach(e => {
        if(/[a-z]/.test(e)){
            e
            let code = e.charCodeAt(0)
            let newCode = ((code - 97 + 13) % 26) + 97;
            code
            newCode
        }else if(/[A-Z]/.test(e)){
            e
        }
    });
    

}

// const x = "EBG13 rknzcyr."
const x = "ABC13 abc."

// "ROT13 example."
console.log(rot13(x))