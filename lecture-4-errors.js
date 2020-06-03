try {
  const singers = ['Bob Dylan', 'Tupac', 'Sasha Lukas', 'Bob Marley']

  singers.forEach(singer => {
    if (singer == 'Sasha Lukas') {
      throw new Error('Vakva muzika ne tuka')
    }
  })
} catch (error) {
  console.log('Se sluci greska: ' + error.message)
}

// const singers = ['Bob Dylan', 'Tupac', 'Sasha Lukas', 'Bob Marley']

// singers.forEach(singer => {
//   if (singer == 'Sasha Lukas') {
//     throw new Error('Vakva muzika ne tuka')
//   }
// })