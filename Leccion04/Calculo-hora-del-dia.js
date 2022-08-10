// 6am- 11am - Buenos dias
// 12pm -18pm -Buenas tardes
// 19pm- 24pm- Buenas noches
// 0am - 6am - Durmiendo

let hora = -1;
let estado;

//imprimira de acuerdo al valor que insertemos de acuerdo a la hora del dia
if (hora >= 6 && hora <= 11) {
  estado = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
  estado = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
  estado = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  estado = "durmiendo";
} else {
  estado = "Valor incorrecto";
}

console.log(estado);
