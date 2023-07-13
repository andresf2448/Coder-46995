/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// for (let i = 0; i < 100; i = i + 2) {
//   console.log(i);
// }

// for(let i = 1; i < 9; i++){
//   console.log(10 * i);
// }

// let numero = parseInt(prompt("Ingrese el número para la tabla de multiplicar"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   // alert(numero + " X " + i + " = " + resultado);
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// let edad = 6;

// console.log("su edad es: " + edad);
// console.log(`su edad es: ${edad}`);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//   alert(mensaje);
// }

// let edad = 6;

// console.log("su edad es: " + edad);
// console.log(`su edad es: ${edad}`);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }

// for (let index = 1; index < 10; index++) {
//   if (index % 2 === 0) {
//     continue;
//   }

//   console.log(index);
// }

// for (let index = 0; index < 10; index = index + 2) {
//   console.log(index);
// }

/* 
estructura del ciclo while

while(condicion){
  codigo a repetoir mientras que la condicion sea verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// let numero = prompt("Ingrese un numero");

// while (numero != "18") {
//   alert("numero incorrecto");
//   numero = prompt("Ingrese un numero");
// }

// alert("Adivinaste el número")

/* 
do while

do{
  codigo a ejecutar por primera vez y cada que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) { primero peinsa y luego actua
//   console.log("entramos");
// }

// do { primero actua y luego piensa
//   console.log("Entramos");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor === valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que valor === valor2
    break;

  .
  .
  .

  default:
    codigo a ejecutar en que el valor no coincida con ninguno de lo anterioes
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("moneda de argentina");
//     break;

//   case "cop":
//     console.log("moneda de colombia");
//     break;

//   case "clp":
//     console.log("moneda de chile");
//     break;

//   default:
//     console.log("moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingrese el nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ANA");
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;

    case "SUSANA":
      alert("Hola SUSANA");
      break;

    default:
      alert("Quién sos?");
      break;
  }

  entrada = prompt("Ingrese el nombre");
}
