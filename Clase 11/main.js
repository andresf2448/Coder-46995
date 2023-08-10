//LOCALSTORAGE

// console.log(localStorage);

//setItem
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", "5");
// localStorage.setItem("valor", "true");

//getItem
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor obtenido", localStorage.getItem(clave));
// }

// removeItem elimina un elemento por su clave
// localStorage.removeItem("nombre");

//clear elimina todo el storage
// localStorage.clear();

//SESSIONSTORAGE
// sessionStorage.setItem("nombre", "camila");
// sessionStorage.setItem("valor", false);
// sessionStorage.setItem("numero", "4");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor obtenido", sessionStorage.getItem(clave));
// }

// removeItem elimina un elemento por su clave
// sessionStorage.removeItem("nombre");

//clear elimina todo el storage
// sessionStorage.clear();

// const objeto = { nombre: "pepito", edad: 34 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// const arreglo = [1, 2, 3, 5, 6];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let objeto = localStorage.getItem("objeto");
// console.log(typeof(objeto));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "media", precio: 400 },
//   { id: 4, nombre: "gorra", precio: 150 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(producto => {
//   guardarStorage(producto.id, JSON.stringify(producto))
// })

// localStorage.setItem("productos", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenido nuevamente ${usuario}`);
// } else {
//   let usuario = prompt("Ingrese el usuario");
//   sessionStorage.setItem("usuario", usuario);

//   alert(`Bienvenido por primera vez ${usuario}`);
// }

//codigo para cargar el storage con el carrito

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "media", precio: 400 },
// ];

// localStorage.setItem("carrito", JSON.stringify(carrito));

// let eliminar = document.getElementById("eliminar");
// let carrito = [];
// let carritoStorage = localStorage.getItem("carrito");

// if (carritoStorage) {
//   carrito = JSON.parse(carritoStorage);
// } else {
//   let div = document.createElement("div");
//   div.innerHTML = "<h1>No hay productos</h1>";
//   document.body.append(div);
// }

// carrito.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;

//   document.body.append(div);
// });

// eliminar.addEventListener("click", () => {
//   localStorage.clear();
//   location.reload();
//   alert("carrito eliminado");
// });
