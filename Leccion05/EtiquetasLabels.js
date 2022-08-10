//etiqueta a la que queremos ir
inicio: for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    break inicio; //ir a la siguiente iteracion
  }
  console.log(contador);
}
