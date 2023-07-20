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

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "operacion no encontrada";
//       break;
//   }
// }

// let numeroUno = parseInt(prompt("Ingrese el primer número"));
// let numeroDos = parseInt(prompt("Ingrese el segundo número"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`El resultado es ${resultado}`);

// let resultado = 0;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(6, 5);

// console.log(resultado);

// {
//   let nombre = "andres";
// }

// console.log(nombre);

// var nombre = "Cami";
// var nombre = "andres";

// console.log(nombre);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function multiplicar(num1, num2) {
//   let resultado = num1 * num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// function dividir(num1, num2) {
//   let resultado = num1 / num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// arrow function o funciones flecha

// const suma = (a, b) => {
//   return a + b;
// };

// suma(5, 6);

// (a, b) => a + b;
// () => "hola";
// x => x + 5;
// (a, b) => {return a + b};

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = parseInt(prompt("Ingrese el valor del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// = resta(suma(1000, iva(1000)), 100);
// = resta(suma(1000, 210), 100);
// = resta(1210, 100);
// = 1110;
alert(`El nuevo precio es ${nuevoPrecio}`);

//precioProducto + precioProducto * iva - descuento
