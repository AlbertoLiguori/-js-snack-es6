// JSNACK 2 - Updated
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikesArray = [

  {
  nome: "Atala",
  peso: 7,
  },

  {
  nome: "Bianchi",
  peso: 5,
  },

  {
  nome: "CiccioBike",
  peso: 15,
  },

];

bikesArray.sort((a,b) => (a.peso - b.peso))

let {nome} = bikesArray[0]
let {peso} = bikesArray[0]
console.log(`La bici più leggera risulta essere il modello "${nome}" con un peso di ${peso} kg `)
