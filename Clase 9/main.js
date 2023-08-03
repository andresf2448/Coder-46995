//getElementById

// let div = document.getElementById("aplicacion");
// let parrafo = document.getElementById("parrafo");

// console.log(div.innerHTML);
// console.log(div.innerText);
// console.log(parrafo.innerHTML);

//getElementsByClassName

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//   console.log(perrito.innerText);
// }

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola a todos</h1>";

// let contenedor = document.getElementById("container");
// let seccion = prompt("Ingrese el nombre de la seccion a la que quiere ir");

// if (seccion === "carrito") {
//   contenedor.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   contenedor.className = "rojo";
// } else if (seccion === "favoritos") {
//   contenedor.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
//   contenedor.className = "verde";
// } else {
//   contenedor.innerHTML = "<h1>Bienvenido a nuestra super página</h1>";
//   contenedor.className = "amarillo";
// }

// let container = document.getElementById("container");
// //agregar nodos
// let parrafo = document.createElement("p"); //creacion de la etiqueta
// parrafo.innerHTML = "Hola Coder"; //agregar contenido
// // document.body.append(parrafo); //asignacion del padre
// container.append(parrafo);

// let container = document.getElementById("container");
// let saludo = prompt("Ingrese el saludo");

// if (saludo === "") {
//   container.remove();
// } else {
//   container.innerHTML = saludo;
// }

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "zapato", precio: 350 },
  { id: 4, nombre: "media", precio: 800 },
  { id: 4, nombre: "media", precio: 800 },
  { id: 4, nombre: "media", precio: 800 },
  { id: 4, nombre: "media", precio: 800 },
  { id: 4, nombre: "media", precio: 800 },
  { id: 4, nombre: "media", precio: 800 },
];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <hr />
  `;

  document.body.append(div)
});
