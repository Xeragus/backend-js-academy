const transactions = [
  {
    from: "Boban",
    to: "Jovan",
    amount: 785
  },
  {
    from: "Jovan",
    to: "Boban",
    amount: 1500
  },
  {
    from: "Edvard",
    to: "Nino",
    amount: 50
  }
]

// Izbroj kolku transakcii imaat vrednost nad 80
let counter = 0
transactions.forEach((transaction) => {
  if (transaction.amount > 80) counter++
})

console.log('Broj na transakcii so vrednost nad 80: ' + counter)

// Koi se tie?
let filteredTransactions = []
transactions.forEach((transaction) => {
  if (transaction.amount > 80) filteredTransactions.push(transaction)
})

console.log('Koi se tie:')
filteredTransactions.forEach(club => {
  console.log(club)
})

// A kako se pravi ova podobro?
// filter
function checkAmount(amount) {
  return amount > 80
}

// arrow functions
const checkAmount = amount => {
  return amount > 80
}

// filteredTransactions = transactions.filter(checkAmount)
filteredTransactions = transactions.filter(transaction => {
  return transaction.amount > 80
})
// filteredTransactions = transactions.filter(function(transaction) {
//   return transaction.amount > 80
// })
console.log(filteredTransactions)