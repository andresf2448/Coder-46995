// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "media", precio: 300 },
//   { id: 4, nombre: "gorra", precio: 1270 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// const actualizar = (nombre, nuevoPrecio) => {
//   let productosStorage = localStorage.getItem("productos");
//   let data = JSON.parse(productosStorage);

//   let encontrado = data.find((item) => item.nombre === nombre);
//   encontrado.precio = nuevoPrecio;

//   localStorage.setItem("productos", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto a actualizar su precio");
// let precio = parseInt(prompt("Ingrese el nuevo precio del producto"));

// actualizar(nombre, precio);

// const agregar = (nombre, precio) => {
//   let productosStorage = localStorage.getItem("productos");
//   let data = JSON.parse(productosStorage);

//   let nuevoProducto = {
//     id: data.length + 1,
//     nombre,
//     precio,
//   };

//   data.push(nuevoProducto);
//   localStorage.setItem("productos", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del nuevo producto a agregar");
// let precio = prompt("Ingrese el precio del nuevo producto");

// agregar(nombre, precio);
