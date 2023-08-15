//OPERADOR ++

// let numero = 10;
// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
estructura del operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando condicion falsa;
*/

// let edad = 15;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("No eres mayor de edad");
// }

// let edad = 20;

// edad >= 18 ? saludar() : console.log("No eres mayor de edad");

// const usuario = {
//   nombre: "andres",
//   edad: 30,
// };

// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a al fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "andres",
//   edad: 10,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/* 
operador1 && operador2 retorna operador1 si este es falso de lo contrario retorna operador2
operador1 || operador2 retorna operador1 si este es true en caso contrario retorna operador2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("Carrito vacio");
// }

// carrito.length === 0 && console.log("Carrito vacio");

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy");//falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); // Hola Mundo
// console.log("" || "Falsy");//falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); // true
// console.log(false || "Falsy"); //falsy

// const usuario1 = {
//   nombre: "pepito",
//   edad: 14,
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 26,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "la propiedad no existe");
// console.log(usuario?.trabajos?.javascript || "la propiedad no existe");

//DESESTRUCTURACIÓN
// const usuario = {
//   nombre: "juan",
//   edad: 34,
//   direccion: "AV",
// };

// const nombre = usuario.nombre;
// const edad = usuario.edad;
// const direccion = usuario.direccion;

// const { nombre, direccion, edad } = usuario;

// const usuario = {
//   nombre: "juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: 1234,
//     trabajo: 234,
//     personal: 456,
//   },
// };

// const {
//   nombre,
//   telefono: { casa, personal },
// } = usuario;
// console.log(casa);

// const mascota = {
//   nombre: "zeus",
//   edad: 1,
//   direccion: "AV",
//   propietarios: {
//     casa: {
//       propietario1: "juan",
//       propietario2: "pedro",
//     },
//     trabajo: {
//       propietario1: "matias",
//     },
//   },
// };

// const {
//   nombre,
//   propietarios: {
//     casa: { propietario2: principal },
//   },
// } = mascota;

// console.log(principal);

// const usuario = {
//   nombre: "juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: 1234,
//     trabajo: 234,
//     personal: 456,
//   },
// };
// let nombre = "juan";
// const {
//   nombre: nombrePersona,
//   telefono: { casa: casaPersona },
// } = usuario;

// console.log(nombrePersona, casaPersona);

// const desestructurar = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

// let usuario = {
//   nombre: "pepito",
//   edad: 50,
//   direccion: "AV",
// };

// desestructurar(usuario);

const nombres = ["Romina", "Matías", "Camila", "Brian", "Gian"];
const [ , , c, d, e] = nombres;

console.log(c, d);
