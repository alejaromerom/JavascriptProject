//z contiene el valor de la suma a + b 
let a = 3, b = 2; 
let z = a + b;
console.log("Resultado de la suma es :" + z);

//resta
z = a - b;

console.log("resultado de la resta " + z );

//multiplicación 

z = a*b;

console.log("resultado de multiplicación: " + z)


z= a/b;

console.log("resultado de la división es: " + z)

z= a%b //residuo de la división 

console.log("resultado de la operación es: " + z)

z = a ** b; 

console.log("Resultado de operador exponente: " + z )

//Incremento
// pre- incremento (El operador ++ antes de la variable)

//se incrementa antes de ser utilizado su valor 
z = ++b; 

console.log("Resultado del incremento: " + z)


z = ++a; 

console.log(a)
console.log(z)
// post-incremento (el operadpr ++ despues e la variable )
//se asigna el valor de b hacia la variable z y posteriormente se incrementa

z = b++; 

console.log(b);
console.log(z);


//Decremento
//pre-decremento 
z =--a; 
console.log(a)
console.log(z)

//Pos- decremento

z =b--;
console.log(b)
console.log(z)