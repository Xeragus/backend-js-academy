let events = require('events')
let util = require('util')

// let Person = function (name, lastname, age) {
//   this.name = name
//   this.lastname = lastname
//   this.age = age
// }

class Person {
  constructor(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
  }
}

util.inherits(Person, events.EventEmitter)

let person1 = new Person('Homer', 'Simpsons', '44')
let person2 = new Person('Marge', 'Simpsons', '42')
let person3 = new Person('Randy', 'Marsh', '48')

const people = [person1, person2, person3]

people.forEach((person) => {
  person.on('speak', message => {
    console.log(person.name + ' said: ' + message)
  })
})

person1.emit('speak', 'Hey, my name is Homer and I really like beer')
person2.emit('speak', 'Homey, please don\'t drink the whole bottle')
person3.emit('speak', 'I\'m Randy')