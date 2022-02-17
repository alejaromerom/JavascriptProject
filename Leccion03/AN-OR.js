
//Ejemplo And (&&), regresa true solo si amb os operandos son true
let a=5; 
//valor minimo 0
let ValMin = 0, valMax=10; 
if(a>=ValMin && a <= valMax){
// Se pregunta si la varible a es mayor o igual que el valor minimo 
// si no se cumple mostrará que está fuera del rango
    console.log("Dentro del rango");
}   

else {

    console.log("fuera del rango");

}

    //Ejemplo de OR(||), regresa true si cualquier operando es true
    //En el ejmeplo hemos definido como false y es por esto de la condicion no se cumplira 
let vacaciones = false ,DiaDescanso= false; 
if (vacaciones || DiaDescanso ){
    console.log("padre puede asistir al juego del hijo ")
}

else {


    console.log("El padre está ocupado");
}