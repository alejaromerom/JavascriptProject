//Mejores practicas para definir funciones
//Declaracion de la funcion

miFuncion(4, 2);

function miFuncion(a, b) {
  //Describir la funcion como objeto

  console.log(arguments.length);
  console.log("suma:" + (a + b));
  return a + b; // 2 argumentos
}
//llamando a la función
miFuncion(2, 3);

// funciones como objetos javascript
console.log(typeof miFuncion);

//imprime el texto de la funcion
// convertit la funcion a texto
var miFuncionTexto = miFuncionTexto.toString();
console.log(miFuncionTexto);
