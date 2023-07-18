/* 
estructura de una función

function nombreFuncion(){
  codigo a ejecutar por la funcion
}

para ejecutar o invocar la función

nombreFuncion();
*/

// function saludar(){
//   console.log("Hola COder!");
// }

// saludar();

// function pedirNombre() {
//   let nombre = prompt("Ingrese su nombre");
//   alert(`Hola ${nombre}`);
// }

// pedirNombre();

/* 
estructura de las funciones con parámetros

function nombreFuncion(param1, param2, ..., paramn){
  codigo a ejecutar por la funcion
}
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "Camila");
// saludar("Bienvenido", "Andrés");

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// sumar(6, 7);
// sumar(4, 2);
// let resultadoSuma = sumar(4, 5);
// console.log(resultadoSuma);

// function saludar() {
//   console.log("hola");
//   console.log("chao");
//   return;
// }

// saludar();

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "operacion no encontrada";
      break;
  }
}

let numeroUno = parseInt(prompt("Ingrese el primer número"));
let numeroDos = parseInt(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numeroUno, numeroDos, operacion);

alert(`El resultado es ${resultado}`);
