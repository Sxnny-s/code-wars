function powersOfTwo(n){
    let answer = []
    
    for(i=0;i <= n; i++){
      x = 2**i
      answer.push(x)
    }
    return answer
  }