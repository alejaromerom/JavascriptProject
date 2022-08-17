//Declaracion funcion de tipo expresión
// A la variable sumar se le asigna una referencia de la funcion
//recibe los argumentos de a y b
let sumar = function (a, b) {
  return a + b;
};
resultado = sumar(1, 2);
console.log(resultado);

//Funcion flecha

const SumarFuncionTipoFlecha = (a, b) => a + b; //En la flecha se definen los argumentos  que recibe la función // la flecha se agrega en lugar de abrir llaves
//Define el cuerpo de la funcion
//Tampoco se utiliza return sini se agrega la operacion de a + b
resultado = SumarFuncionTipoFlecha(3, 5);
console.log(resultado);
