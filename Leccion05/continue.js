// se pregunta si el valor es diferente de 0(numero par)
//Lo que hará continue es ejecutar la siguiente iteracion del ciclo for
for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    continue; //ir a la siguiente iteracion
  }
  console.log(contador);
}
