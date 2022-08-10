let numero = 0;
// se comparan cada uno de los casos y se ejecutan solo si se encuentran
// se pasara añ  casp sogioente de acuerdo si se cumple la condicion
let numeroTexto = "valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "numero uno ";
    break;
  case 2:
    numeroTexto = "numero dos";
    break;
  case 3:
    numeroTexto = "numero tres";
    break;
  case 4:
    numeroTexto = "numero cuatro";
    break;

  default:
    numeroTexto = "caso no encontrado";
}

console.log(numeroTexto);
