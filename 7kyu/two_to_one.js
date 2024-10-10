// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    // your code
    s1Set = new Set();
    s1Array = s1.split('')
    s1Sorted = s1Array.sort()

    s2Set = new Set();
    s2Array = s2.split('')
    s2Sorted = s2Array.sort()


    s2Sorted.forEach(e => {
        s2Set.add(e)
    });

    s1Sorted.forEach(e => {
        s1Set.add(e)
    });
    
    function setAsString(set){
        return  Array.from(set).join('')
    }

    if(s1Set.size > s2Set.size){
        return setAsString(s1Set)
    }else if(s1Set.size < s2Set.size){
        return setAsString(s2Set)
    }
    
  }


  console.log(longest("aretheyhere", "yestheyarehere"))
  console.log("aehrsty")
  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
  console.log("abcdefghilnoprstu")
  console.log(longest("inmanylanguages", "theresapairoffunctions"))
  console.log("acefghilmnoprstuy")