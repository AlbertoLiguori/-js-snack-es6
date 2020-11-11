//JSNACK-3
//Creare un oggetto che rappresenti un triangolo rettangolo con le seguenti proprietà: base e altezza
//Calcolare perimetro e area

let triangolo = {

  base: 10,

  altezza: 5,

  area: ()=>(triangolo.base * triangolo.altezza)/2,

  ipotenusa: ()=>(triangolo.altezza**2 + triangolo.base**2)**0.5,

  perimetro: ()=>triangolo.base + triangolo.altezza + triangolo.ipotenusa(),

};

console.log(`L'area del triangolo risulta essere :${triangolo.area()}`);
console.log(`Il perimetro del triangolo risulta essere :${triangolo.perimetro()}`);
