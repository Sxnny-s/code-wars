// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
  let x = url.replace(/^(https?:\/\/)?(www\.)?/,'')
  x
  let domain = x.split('.')
  return domain[0]
    
    


  }

const x = "http://google.com"  
  console.log(domainName(x))