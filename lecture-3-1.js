const numbers = [11, 14, 15]
const students = [
  {
    id: 1,
    name: "Boban"
  },
  {
    id: 2,
    name: "Dragana"
  },
  {
    id: 3,
    name: "Nino"
  }
]

console.log(students)

let updatedStudents = students.map((student) => {
  student.university = "Kiril i Metodij"
  
  return student 
})

console.log(updatedStudents)

// const updatedNumbers = numbers.map((number) => {
//   return number + 2
// })

// console.log(numbers)
// console.log(updatedNumbers)