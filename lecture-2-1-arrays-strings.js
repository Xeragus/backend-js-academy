const clubs = ['Barcelona', 'Real Madrid', 'Valencia', 'Arsenal', 'Lyon']

console.log('======== problem 1 ==========')
// for(let i = 0; i < clubs.length; i++) {
//   if (clubs[i] == 'Valencia') {
//     console.log('Valencia - mojot omilen klub')
//   } else if (clubs[i] == 'Arsenal') {
//     break;
//   } else {
//     console.log(clubs[i])
//   }
// }

console.log('======== problem 2 ==========')
// for(let i = 0; i < clubs.length; i++) {
//   if (clubs[i] == 'Valencia') {
//     console.log('Valencia - mojot omilen klub')
//   } else if (clubs[i] == 'Arsenal') {
//     continue;
//   } else {
//     console.log(clubs[i])
//   }
// }

console.log('======== problem 3 ==========')
// for/of statement
var club
for (club of clubs) {
  console.log(club)
}

console.log('======== problem 4 ==========')
// foreach
// clubs.forEach((club) => {
//   console.log(club + "4")
// })

console.log('======== problem 5 ==========')
const person = {
  name: 'Boban',
  club: 'Arsenal',
  city: 'Skopje'
}
// for..in - iteriranje niz objekti
var prop
for (prop in person) {
  console.log(prop + " e svojtvo na objektot person so vrednost " + person[prop])
  console.log(person[prop])
}

console.log('======== problem 6 ==========')
const amounts = [220, 60, 99]
let result = amounts.reduce((total, currentNumber) => {
  return total - currentNumber
})
console.log(result)
// prva iteracija
// total = 220, currentNumber = 60
// 220 - 60 = 160, 160 kje bide total vo sledna iteracija
// vtora iteracija
// total = 160,  currentNumber = 99
// total na kraj kje bide 61

result = amounts.reduceRight((total, currentNumber) => {
  return total - currentNumber
})
console.log(result)