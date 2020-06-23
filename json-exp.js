let name = 'Boban'
let lastname = 'Sugareski'
let todos = ['napravi ova', 'napravi ona']

let content = {
  todos
}

// res.render('index', {
//   todos: todos,
//   title: title
// })

// skratena verzija za odredeni slucai vo koi imeto na svojstvoto na objektot (object property)
// e isto so imeto na promenlivata vo koja se cuva vrednosta koja se zadava za toa svojstvo (property)
// res.render('index', { todos, title })

// sekoj JSON objekt e sostaven od 1 ili povekje atributi
// sekoj atribut ima ime i vrednost


function a() {
  var x = 5
}

function b() {
  return {
    x: x
  }
}

console.log(b())