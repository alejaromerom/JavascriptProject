//Declaracion de la suma
//regresa a un valor
function miFuncion(a, b) {
  return a + b;
}
//llamando a la funcion
//se ejecuta
// recibe los valores 2 y 3
// cuerpo de la funcion
// se regresa el valor de la suma

let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion de funcion de tipo expresion
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);
console.log(resultado);

//Selfinvoking
//omprimir un mensaje a consola
//llamando la funcion así misma
(function (a, b) {
  console.log("ejecutando la funcion:" + (a + b));
})(3, 4);
