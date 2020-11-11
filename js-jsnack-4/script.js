//JSNACK-4A

// Creare un array di oggetti di squadre di calcio
//Ogni squadra avrà diverse Proprietà:
//                                      Nome
//                                      Punti fatti
//                                      Falli subiti

//Nome sarà l'unica proprietà da compilare
//Le altre saranno tutte settate a 0

var teams =[
  {
    nome:"Dream Team",
    punti_fatti:0,
    falli_subiti:0,

  },

  {
    nome:"All Stars",
    punti_fatti:0,
    falli_subiti:0,

  },

  {
    nome:"Boolean Squad",
    punti_fatti:0,
    falli_subiti:0,

  },

  {
    nome:"CiccioBike Team",
    punti_fatti:0,
    falli_subiti:0,

  },
];




//JSNACK-4B
//Generare numeri Random al posto degli 0 nelle proprietà:
//                                                        Punti fatti
//                                                        Falli Subiti

assignValues(teams);
console.log(teams);
