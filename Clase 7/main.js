// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); // (m) => m > 5
// console.log(mayorQueCinco(10));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); // (m) => m > 10
// console.log(mayorQueCinco(11));
// console.log(mayorQueCinco(3));

// function generarOperacion(operacion) {
//   if (operacion === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (operacion === "restar") {
//     return (a, b) => a - b;
//   }

//   if (operacion === "multiplicar") {
//     return (a, b) => a * b;
//   }

//   if (operacion === "dividir") {
//     return (a, b) => a / b;
//   }
// }

// let suma = generarOperacion("sumar"); // (a, b) => a + b;
// console.log(suma(6, 7));

// let dividir = generarOperacion("dividir"); // (a, b) => a / b;
// console.log(dividir(10, 2));

// function iterar(arr, funcion) {
//   for (const el of arr) {
//     funcion(el);
//   }
// }

// iterar([3, 4, 56, 7], console.log);

// const doble = [];
// const numeros = [3, 4, 56, 7];

// function iterar(arr, funcion) {
//   for (const el of arr) {
//     funcion(el);
//   }
// }

// const duplicar = (el) => {
//   doble.push(el * 2);
// };

// iterar(numeros, duplicar);

// console.log(doble);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "media", precio: 837 },
// ];

//forEach recorrer una arreglo
// productos.forEach((item) => {
//   console.log(item.nombre);
// });

//find encuentra el primer elemento que cumpla la condicion
// const producto = productos.find(item => item.nombre === "camisa");
// console.log(producto);

// let nombre = prompt("Ingrese el nombre del producto a consultar");
// let producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   let mensaje = `
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     $${producto.precio}
//   `;

//   alert(mensaje);
// } else {
//   alert("Producto no encontrado");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "media", precio: 837 },
// ];

//filter filtra los elementos que cumplen la condicion
// let precio = parseInt(prompt("Ingrese el precio minimo"));
// let encontrados = productos.filter((item) => item.precio > precio);

// encontrados.forEach((item) => {
//   alert(item.nombre);
// });

//some verifica si existe al menos un elemento que cumple la propiedad
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "camisa grande"));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "media", precio: 837 },
// ];

//map transformar la informacion de un arreglo
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nuevosPrecios = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(nuevosPrecios);

//reduce reduce un arreglo a un unico valor
// const numeros = [3, 4, 5, 6];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);

// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "media", precio: 837 },
// ];

// const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "media", precio: 837 },
// ];

// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
);
