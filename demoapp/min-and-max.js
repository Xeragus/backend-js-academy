const numbers = [5, 3, 12, 7, 8, 1]

// algoritam za naogjanje na maksimalen broj vo niza
let max = 0

numbers.forEach(number => {
  if (number > max) {
    max = number
  }
})

/**
 * prva iteracija
 * number = 5
 * max = 0
 * number > 0 => max = 5
 * 
 * vtora iteracija
 * number = 3
 * max = 5
 * 3 > 5 => max = 5
 * 
 * treta iteracija
 * number = 7
 * max = 5
 * 7 > 5 => max = 7 
 *
 * cetvrta iteracija
 * number = 8
 * max = 7
 * 8 > 7 => max = 8
 * 
 * petta iteracija
 * number = 1
 * max = 8
 * 1 > 8 => max = 8
 */

console.log('Najgolemiot broj e brojot: ' + max)
