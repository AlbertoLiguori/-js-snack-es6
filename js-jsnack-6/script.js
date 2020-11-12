// JSNACK- 6
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale


var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

//Generatore di una letterea dell'alfabeto casuale
const charStr = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let randomLetter = () => charStr.charAt(randomBetween(0, 24));

//Assegna una proprietà position:"lettera casuale" ad un array copia
// di arrayObj

const newArray = arrayObj.map((element) => {

  let newObjProperty = {position: randomLetter()};
  let mergedObj = {};

  return mergedObj = {...element,...newObjProperty};

});

console.log(newArray);
