// return masked string
function maskify(cc) {
    let arr = cc.split('')
    let mask = arr.map((e,i) => {
      if(i < arr.length - 4){
        return e = "#" 
      } 
      else {
        return e
      }
    })
    
    return mask.join('')
  
  }