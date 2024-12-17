// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
    let hour = Math.floor(seconds / 3600)
    hour
    seconds -= hour * 3600
    let minute =  Math.floor(seconds / 60)
    minute
    seconds -= minute * 60
    seconds

    return `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${seconds.toString().padStart(2, '0')}`
  }


  let x = 86400
  console.log(humanReadable(x))