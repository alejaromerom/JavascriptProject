//Ejemplo con los numeros pares de 0 a 10
// Se agrega un break para terminar esa sentencia
//y que no contunue más con el ciclo
for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
    break;
  }
}
console.log("fin  del ciclo for");
