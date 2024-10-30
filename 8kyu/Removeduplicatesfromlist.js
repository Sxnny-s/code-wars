function distinct(a) {
    const unique = new Set()
    result = []
    
    a.forEach((e) => {
      if(!unique.has(e)){
        unique.add(e);
        result.push(e)
      }
    })
    
    return result
  }