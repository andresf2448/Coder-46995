/* 
estructura de un arreglo

[valor0, valor1, ..., valorn]
*/

// const arregloVacio = [];
// const numeros = [4, 5, 6, 7, 4, 3];
// const nombres = ["andres", "camila", "Romina"];
// const valores = [true, false, false, true];
// const varios = [1, true, "andres"];

// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(numeros[1] + numeros[3]);

// const nombres = ["andres", "camila", "Romina", "juan", "pepito"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

// const nombres = ["andres", "camila", "Romina"];
// nombres.push("mariana"); //agrega elementos al final del arreglo
// console.log(nombres);

// nombres.unshift("sofia"); //agrega elementos al inicio del arreglo
// console.log(nombres);

// nombres.pop();// quita el ultimo elemento del arreglo
// console.log(nombres);

// nombres.shift();// quita el primer elemento del arreglo
// console.log(nombres);

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// nombres.splice(1, 2); //eliminar varios elementos de un arreglo

// console.log(nombres);

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// console.log(nombres.join("***")); //unir en un solo string separado por lo que colocamos en el parametro

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// const mascotas = ["firu", "zeus", "max"];
// const variados = nombres.concat(mascotas); //une en un mismo arreglo dos arreglos diferentes
// console.log(variados);

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// const copia = nombres.slice(1, 4); //crear una copia d eun fragmento de un arreglo
// console.log(copia);

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// console.log(nombres.indexOf("juan")); //busca el indice del elemento coocado en parametro
// console.log(nombres.indexOf("juan andres"));

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// console.log(nombres.includes("juan"));
// console.log(nombres.includes("pepito"));

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// let nombre = prompt("Ingrese el nombre a buscar");

// if (nombres.includes(nombre)) {
//   alert("El nombre se encuentra en la lista");
// } else {
//   alert("El nombre no se encuentra en la lista");
// }

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// nombres.reverse();

// console.log(nombres);

const productos = ["camisa", "zapato", "media"];

let producto = prompt("Ingrese el nombre del producto a consultar");

while(producto != "ESC"){
  if (productos.includes(producto)) {
    alert("El producto se encuentra disponible");
  } else {
    alert("El producto no se encuentra disponible");
  }

  producto = prompt("Ingrese el nombre del producto a consultar");
}

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("andres");

// const nombres = ["andres", "camila", "Romina", "juan", "pedro"];
// let nombre = "Romina";

// for (let index = 0; index < nombres.length; index++) {
//   if (nombres[index] === nombre) {
//     console.log(index);
//   }
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// for(const daniela of productos){
//   console.log(daniela.nombre);
// }
