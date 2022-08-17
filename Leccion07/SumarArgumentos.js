let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);
//Definir varias variables para iteriar argumentos
function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    //moverse por cada uno de los argumentos
    suma += arguments[i]; //suma = suma + arguments [i]
    //por cada valor se va ir almacenando la variable de suma
  }
  return suma;
}
