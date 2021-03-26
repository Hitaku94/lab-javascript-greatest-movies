// Iteration 1: All directors? - Get the array of all directors.
    const getAllDirectors = (moviesArr) => {
        let directorsMap = moviesArr.map((elem) => {
            return elem.director
        })
        return directorsMap
    }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
      const howManyMovies = (stevenArr) => {
          let spielberg = stevenArr.filter((elem, index) => {
              return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
          })
          console.log(spielberg)
          return spielberg.length
      }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
      const ratesAverage = (arrRate) => {
          if ( arrRate.length === 0) {
              return 0
          }
          let rateMovies = arrRate.map((elem) => {
              return elem.rate
          })
          let avgRate = rateMovies.reduce((acc, elem, index) => {
              if (elem) {
                return acc + elem
              } else {
                return acc
              }
              
          }, 0)
          let answer = avgRate/rateMovies.length
          return Number(answer.toFixed(2))
      }
// Iteration 4: Drama movies - Get the average of Drama Movies
      
const dramaMoviesRate = (arrDrama) => {

          let rateDrama = arrDrama.filter((elem) => {
                return elem.genre.includes("Drama")
            
          })
          let dramaRate = rateDrama.map((elem) => {
              return elem.rate
          })
          let avgDrama = dramaRate.reduce((acc, elem) => {
              if (elem) {
                return acc + elem
              } else {
                  return acc
              }
          }, 0)
          let answer = avgDrama/dramaRate.length
          console.log(Number(answer.toFixed(2)))
          return Number(answer.toFixed(2))
      }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
      

let orderByYear = (someArr) => {
    
    let cloneArray = JSON.parse(JSON.stringify(someArr))
    
    let order = cloneArray.sort((elem1, elem2) => {
        if (elem1.year > elem2.year) {
            return 1
        } else if ( elem1.year < elem2.year) {
            return -1
        } else {
            if (elem1.title > elem2.title) {
                return 1
            } else if (elem1.title < elem2.title) {
                return -1
            } else {
                return 0
            }
        }
      
    })
    return order
}


    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    const orderAlphabetically = (someArr) => {
        let filterOrder = someArr.filter((elem, index) => {
            return index < 20
        }) 
        let mapOrder = filterOrder.map((elem) => {
            return elem.title
        })

        let clonedArray = JSON.parse(JSON.stringify(mapOrder))

        let orderTitle = clonedArray.sort((elem1, elem2) => {
            if ( elem1 > elem2) {
                return 1
            } else if (elem1 < elem2) {
                return -1
            } else {
                return 0
            }
        })
        return orderTitle
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

    const turnHoursToMinutes = (someArr) => {

    }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
