// const nombres = ["juan", "manuela", "pedro"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [1, 4, 6, 8, 77, 8, 99, 67, 4, 3];
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// let nombre = "andres";
// let nombre2 = nombre;

// nombre2 = "cristian";

// console.log(nombre);

// const persona = { nombre: "camila", edad: 50 };
// const persona1 = {...persona};

// persona1.nombre = "sofia";
// console.log(persona);

// const usuario1 = {
//   nombre: "pepito",
//   edad: 23,
//   curso: "javascript",
// };

// const usuario2 = {
//   ...usuario1,
//   curso: "react",
//   direccion: "AV",
// };

// console.log(usuario2);

// function sumar(...numeros) {
//   console.log(numeros);

//   return numeros.reduce((acumulador, item) => acumulador + item, 0);
// }

// console.log(sumar(4, 5, 6, 4, 5));
// console.log(sumar(4, 5));

//REPASO
/* 
estructura del condicion
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codigo a ejeuctar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejeuctar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

/* 
for(desde; hasta; actualziacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let entrada = prompt("Ingrese el usuario");

// while (entrada != "pepito") {
//   alert("usuario incorrecto");
//   entrada = prompt("Ingrese el usuario");
// }

/* 
function nombreFuncion(parm1, param2, ..., paramn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);

const nombreFuncion = (parm1, parm2) => {
  codigo a ejecutar por la funcion
}
*/

// function sumar(x, y) {
//   return x + y;
// }

// const sumar = (x, y) => {
//   return x + y;
// };

// sumar(4, 5);

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }

//   info() {
//     console.log(`Hola, soy ${this.nombre}`);
//   }
// }

// const producto = new Producto("camisa", 1000);
// console.log(producto);
// producto.info();

////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

// const carrito = [];

// const agregar = (id) => {
//   let producto = productos.find((item) => item.id === id);

//   carrito.push(producto);
//   console.log(carrito);
//   // let mensaje = `
//   //   id: ${producto.id}
//   //   Nombre: ${producto.nombre}
//   //   $${producto.precio}
//   // `;

//   // alert(mensaje);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr />
//     `;
//   document.body.append(div);

//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregar(item.id));
// });
////////////////////////////////////////////////////////////////////////////////////

const productos = [];
let contenedor = document.getElementById("contenedor");

const renderizado = (productos) => {
  contenedor.innerHTML = "";
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
      `;
    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  //Math.max(...productos.map(item => item.id)) + 1
  productos.push({ id: productos.length + 1, nombre, precio });
  renderizado(productos);
});
