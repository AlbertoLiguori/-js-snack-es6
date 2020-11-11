//Generatore un numero casuale in un determinato intervallo
// function randomBetween(min, max){
//   let random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
//   return random;
// };

const randomBetween = (min, max) => parseInt(Math.floor((Math.random()*(max - min)) + min + 1));

const assignValues = (anArray) => {
  anArray.forEach((element) => {
    element.punti_fatti = randomBetween(0,100);
    element.falli_subiti = randomBetween(0,30);
  });
};
