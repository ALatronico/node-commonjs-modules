const newFullName = require('./names.js');
const newHobbies = require('./hobbies.js');

function oneObject(){
  const fullName = newFullName('Antonio', "Latronico")
  const hobbies = newHobbies("sport", "musica", "gaming")

  return {
    fullName,
    hobbies
  };
}

const person = oneObject();
console.log(person);