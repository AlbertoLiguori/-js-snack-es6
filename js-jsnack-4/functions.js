//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
};

function assignValues(anArray){
  anArray.forEach(function (element){
    element.punti_fatti= randomBetween(0,100);
    element.falli_subiti= randomBetween(0,30);
  });
};
