// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
//     false otherwise.


function allContinents(list) {
    // thank you for checking out the Coding Meetup kata :)
    let continents = []
    list.forEach(e => {
        continents.push(e.continent)
    });
    continents

    if(continents.includes('Africa') && continents.includes('Americas') && continents.includes('Europe') && continents.includes('Asia') && continents.includes('Oceania')){
        return true
    }else{
        return false
    }



  }


const x = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
  ];
  console.log(allContinents(x))
