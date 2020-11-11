//JSNACK-2
//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:nome e peso.
//Stampare a schermo la bici con peso minore


var bikesArray = [

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

function biciCompare(anArray){
  anArray.sort(function(a,b){
    // ALTERNATIVA 1
    // if (a.peso >= b.peso){
    //   return -1;
    // } else {
    //   return 1;
    // };

    //ALTERNATIVA 2
    return (a.peso - b.peso);
  });

}

biciCompare(bikesArray);
console.log(bikesArray);
console.log(bikesArray[0]);
