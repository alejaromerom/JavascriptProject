let mes = 0;
let estacion = "estacion desconocida";

// Recorre el switch y si coincide con el caso se imprime el valor indicado a la estacion
switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "invierno";
    break;

  case 3:
  case 4:
  case 5:
    estacion = "primavera";
    break;

  case 6:
  case 7:
  case 8:
    estacion = "verano";
    break;

  case 9:
  case 10:
  case 11:
    estacion = "otoño";
    break;

  default:
    estacion = "valor incorrecto";
}

console.log(estacion);
