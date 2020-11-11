//JSNACK-2
//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:nome e peso.
//Stampare a schermo la bici con peso minore


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
