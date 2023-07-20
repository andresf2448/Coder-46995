// let nombre = "pepito";
// let edad = 54;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito",
//   edad: 54,
//   direccion: "AV",
//   cantidadHermanos: 5
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);

// let clave = prompt("Ingrese el nombre de la clave que desea consultar");

// alert(persona1.clave);
// alert(persona1[clave]);

// function devolverValor(clave) {
//   // return persona1[clave];
//   return persona1.clave
// }

// console.log(devolverValor("direccion"));

// funcion constructora
// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 34, "AV");
// const persona2 = new Persona("pepita", 50, "AV");

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombrePersona;
//   this.edad = info.edadPersona;
//   this.direccion = info.direccionPersona;
//   this.familiares = info.familiaresPersona;
// }

// const info1 = {
//   nombrePersona: "pepito",
//   familiaresPersona: "asdfasdf",
//   direccionPersona: "AV",
//   edadPersona: 34,
// };

// const persona1 = new Persona(info1);
// console.log(persona1);

// const persona2 = new Persona({
//   nombrePersona: "pepita",
//   familiaresPersona: { nombre: "camila", edad: 20 },
//   direccionPersona: "AV1",
//   edadPersona: 47,
// });
// console.log(persona2);

// function sumar(x, y) {
//   return x + y;
// }

// sumar(6, 5);

// function Producto(nombre, precio, imagen) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto(
//   "MÁS VENDIDO Monitor gamer Samsung...",
//   289900,
//   "http://asldfkjhj"
// );

// const producto2 = new Producto(
//   "RECOMENDADO Monitor gamer curvo Samsung...",
//   867212,
//   ""
// )

// console.log(producto1);

// const persona = {
//   nombre: "andres",
//   edad: 26,
//   direccion: "AV",
// };

// for (const propiedad in persona) {
//   console.log("clave", propiedad);
//   console.log("valor", persona[propiedad]);
// }

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
//   this.hablar = function () {
//     console.log("HOLA SOY " + this.nombre);
//   };
// }

// let nombre = prompt("ingrese el nombre")
// let edad = prompt("ingrese el edad")
// let direccion = prompt("ingrese el direecion")

// const persona = new Persona(nombre, edad, direccion);
// console.log(persona);

// persona.hablar();

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
//   this.hablar = function () {
//     console.log("HOLA SOY " + this.nombre);
//   };
// }

// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//   }

//   hablar() {
//     console.log("HOLA SOY " + this.nombre);
//   }
// }

// const persona = new Persona("andres", 100, "AV");
// console.log(persona);

// persona.hablar();

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("camisa", 123);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1;  // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto("camisa", 123, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
