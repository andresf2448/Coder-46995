// MATH

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(1, 5, 77, 8, 7, 99, 5, 66, 5, 1));
// console.log(Math.max(1, 5, 77, 8, 7, 99, 5, 66, 5, 1));
// console.log(Math.max(1, 5, 77, 8, 7, Infinity, 99, 5, 66, 5, 1));
// console.log(Math.min(1, 5, 77, 8, 7, -Infinity, 99, 5, 66, 5, 1));

// console.log(Math.ceil(3.14)); //aproxima al entero más cercano hacia arriba
// console.log(Math.floor(3.75)); //aproxima al entero más cercano hacia abajo
// console.log(Math.round(3.14)); //aproxima al entero más cercano
// console.log(Math.round(3.54));

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

// console.log(Math.random());
// console.log(Math.round(Math.random() * 7 + 20));
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// const numeroAleatorio = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento);
// };

// console.log(numeroAleatorio(30, 17));
// console.log(numeroAleatorio(30, 17));
// console.log(numeroAleatorio(30, 17));
// console.log(numeroAleatorio(30, 17));

//Dado un arreglo de nombres, crear una funcion que genere nombres aleatorios

// const nombres = [
//   "Ana",
//   "Juan",
//   "John",
//   "Maria",
//   "Keyra",
//   "Luis",
//   "Pablo",
//   "Federico",
// ];

// const nombreAleatorio = () => {
//   let aleatorio = Math.round(Math.random() * nombres.length);
//   return nombres[aleatorio];
// };

// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());

// console.log(Date());
// console.log(new Date(2023, 6, 31));

// let navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);

// const hoy = new Date("July 31, 2023");

// console.log(hoy.toDateString());
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleDateString());
// console.log(hoy.toTimeString());

// const hoy = new Date("July 31, 2023");

// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());
// console.log(hoy.getDay());

navidad = new Date("December 24, 2023 23:59:59");
const hoy = new Date("July 31, 2023");

// console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log(Math.round((navidad - hoy) / milisegundosPorDia));
