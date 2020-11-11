//JSNACK 1A

//Creare un oggetto che abbia le seguenti Proprietà:
//                                                    Nome = palla
//                                                    Peso =10

var palla={
  nome:"palla",
  peso:10,
  toString:function(){
    return `La proprietà "nome" contiene:` + this.nome + `\n La proprietà "peso" contiene: ` + this.peso;
  }
};

console.log(palla.toString());

//JSNACK 1B

//Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla

palla.peso = parseInt(prompt(`inserisci un peso`));

console.log (palla.toString());
