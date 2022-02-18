let miNumero = "18x" ;

let edad = Number (miNumero);
//NaN : Not a number - Ya no es número 
console.log(edad); 

//Si la variable edad no es numero

if (isNaN(edad)){
console.log("No es un numero")


}

if (edad >= 18){

console.log("puede votar");

}
else {
console.log("Muy joven para votar")

}

let resultado = ( edad >=18) ?"puede votar" : "muy joven para votar"; 
console.log(resultado); 