
/*
Ejemplos de tipos de datos JavaScript 
*/
//tipo de dato string

var nombre = "Alejandra" 
console.log(typeof nombre);

nombre = 10;

console.log(typeof nombre);

//tipo de dato númerico 
var numero= 1000; 
console.log(numero); 1000 

//tipo de dato object

var object= {

nombre : "Alejandra", 
apellido: "Romero",
telefono: "8125428"
}
console.log(typeof object);  

//tipo de dato boolean (true, false)

var bandera= true;  
console.log (bandera); 

//tipo de dato funcion 

function myfuction () {}
console.log( typeof myfuction); 

// Tipo de dato Symbol 

var simbolo = Symbol("mi simbolo");
console.log (typeof simbolo); 

//tipo clase persona 

class persona {

constructor(nombre, apellido){


    this.nombre = nombre;
    this.apellido =apellido;
}

}

console.log(typeof persona);


//Tipo de dato undefined 

x = undefined; 
console.log( typeof x);


var x; 
console.log( typeof x);
//null= ausencia de valor 

var y =null; 


console.log(typeof y);

console.log(typeof y);

var autos = ['BMW','AUDI', 'MAZDA'];

console.log(autos);
console.log(typeof autos)

var  z = ''; 

console.log(z)
console.log(typeof z);
