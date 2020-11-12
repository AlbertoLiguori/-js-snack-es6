// JSNACK 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara','Ciccio'];

//Funzione che chiede un input ad un utente
let getAnInput = () => prompt(`Inserisci un numero compreso tra "0" e ${myArray.length - 1}`);

//Richiesta di un range all'utente
let rangeArr = [getAnInput(),getAnInput()];

//Posiziona gli elementi in ordine crescente rispetto al loro valore
rangeArr.sort((a,b) => a - b);

//Verifica acquisizione
console.log(rangeArr);

//restituisce un'array filtrato secondo il range richiesto
const newArray = myArray.filter((element, index) => index >= rangeArr[0] && index <= rangeArr[1]);

//Stampa l'array richiesto
console.log(newArray);
