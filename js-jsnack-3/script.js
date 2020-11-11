//JSNACK-3
//Creare un oggetto che rappresenti un triangolo rettangolo con le seguenti proprietà: base e altezza
//Calcolare perimetro e area

var triangolo = {

  base:10,

  altezza:5,

  area:function(){
      //N.B: "**n" =elevazione a n potenza
      return (this.base * this.altezza)/2;
  },

  ipotenusa: function(){
    return (this.altezza**2 + this.base**2)**0.5;
  },

  perimetro:function(){

      return (this.base + this.altezza + this.ipotenusa());
  },

};

console.log(triangolo.area());
console.log(triangolo.perimetro());
