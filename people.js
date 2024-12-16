const fullName = require('./names.js');
const hobbies = require('./hobbies.js');

function oneObject(){
  const fullName = fullName(Antonio, Latronico);
  const hobbies = hobbies(sport, musica, gaming);

  return {
    fullName,
    hobbies
  };
}

const person = oneObject();
console.log(person);