//let autos = new Array ('BMW', 'Mercedes Benz', 'Volvo');
// Espacio en memoria en donde se encuentre el arreglo
// const porque la variable no se modifica
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);
// solo imprime la posiscion que le estamos indicando

console.log(autos[0]);
console.log(autos[2]);
//legtn cantidad de elementos que tenga nuestro arreglo

for (let i = 0; i < autos.length; i++) {
  //se concatena y se imprime la poscion de un arreglo
  console.log(i + " : " + autos[i]);
}

// Modificar arreglos
autos[1] = "MercedesBenz";
console.log(autos[1]);

//agregar elementos a un arreglo
autos.push("Audi");
console.log(autos);

//agregar elementos a un arreglo de otra manera
//regresa la cantidad de elementos de nuestro elemento
console.log(autos.length);

autos[autos.length] = "cadillac";

console.log(autos);
// el espacio 5 no  tiene ningun arreglo pero queda reservado
autos[5] = "Porshe";
console.log(autos);

//preguntar si es un array
console.log(Array.isArray(autos));
// si es una instancia de tipo arreglo
console.log(autos instanceof Array);
