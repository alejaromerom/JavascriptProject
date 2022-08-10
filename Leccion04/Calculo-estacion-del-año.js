let mes = 4;
let estacion;

//imprimira de acuerdo al valor que insertemos
if (mes == 1 || mes == 2 || mes == 12) {
  estacion = "invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
  estacion = "otoño";
} else {
  estacion = "valor incorrecto";
}

console.log(estacion);
