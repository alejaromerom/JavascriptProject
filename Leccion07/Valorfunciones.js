//valor primitivo
//no tienen atributos ni metodos
let x = 10;

function cambiarValor(a) {
  //Esta variable se destruyre al no estar definida
  a = 20;
  return;
}

//le pasa erl valor de la variable x
cambiarValor(x); //10
console.log(x);
// esta varaible no esta definida
//console.log(a);

//Referencias por funciones

//la variable persona almacena una referencia a un objeto
//objeto en memoria
const persona = {
  nombre: "Juan",
  apellido: "Perez",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "carlos";
  p1.apellido = "Lara";
}
//paso por referencia

cambiarValorObjeto(persona);
console.log(persona);
