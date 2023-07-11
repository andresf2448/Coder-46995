/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

// if(false){
//   console.log("entramos");
// }

// console.log("Finalizamos");

// if(""){
//   console.log("entramos");
// }

// if(-2){
//   console.log("entramos");
// }

// let edad = 10;

// if(edad >= 18){
//   console.log("puedes entrar a la fiesta");
// }

/* 
estructura del if else

if(condicion){
  codigo a ejecutar cuan do la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion no es verdadera
}
*/

// let edad = 4;

// if (edad >= 18) {
//   console.log("puedes entrar a la fiesta");
// } else {
//   console.log("no puedes entrar a la fiesta");
// }

/* 
= asignacion
== comparacion solo de valor
==== comparacion tanto de valor como de tipo
*/

// let respuesta = prompt("Terminaste la tarea?");

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("no puedes salir a jugar");
// }

/* 
estructura del if else if else

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let edad = parseInt(prompt("ingrese su edad"));

// if (edad < 14) {
//   alert("no puedes entrar a la fiesta");
// } else if (edad < 18) {
//   let adulto = prompt("Vives con un adulto").toLowerCase();

//   if (adulto === "si") {
//     alert("Puedes entrar con un adulto");
//   } else {
//     alert("No puedes entrar porque no tienes un adulto");
//   }
// } else {
//   alert("Puedes entrar a la fiesta");
// }

// let numero = 10;
// let resultado = numero > 20;

// console.log(resultado);

/* 
&& es verdadera cuando todas las condiciones son verdaderas de lo contrario es falso

|| es verdadera cuando al menos una de las condiciones es verdadera de lo contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert("Hola " + nombre + " " + apellido);
// } else {
//   alert("El nombre y el apellido deben ser ingresados");
// }

let nombre = prompt("Ingrese el nombre");

if (nombre === "ANA" || nombre === "ana") {
  alert("Hola " + nombre);
} else {
  alert("El nombre no es ana");
}
