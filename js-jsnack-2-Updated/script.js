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

console.log(bikesArray);
console.log(bikesArray[0]);

let{email} = student
console.log(email)

const arr = [1,2,3,4]

const[myfirstEl, mySecondEl]= arr
