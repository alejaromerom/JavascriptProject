let a =3,b = 2, c=1,d=4;

//Se evalua de izquierda a derecha
let z = a*b + c / d;
console.log(z);

//Toma mayor prioridad la multiplicacion 
// De izquierda a derecha y al final la suma
z= c + a* b /d;

console.log(z)

z= (c+a)* b/c; 

console.log(z);