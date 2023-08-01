//map transformar la informacion
// let productos = [
//   { id: 1, nombre: "Camisa", precio: 1000 },
//   { id: 2, nombre: "Gorra", precio: 350 },
//   { id: 3, nombre: "Zapato", precio: 750 },
//   { id: 4, nombre: "Media", precio: 500 },
// ];

// // let nombres = productos.map((item) => item.nombre)
// // console.log(nombres);

// let hombres = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: `${item.nombre} Hombre`,
//     precio: item.precio + 100,
//   };
// });

// console.log(hombres);

// let mujeres = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: `${item.nombre} Mujer`,
//     precio: item.precio - 100,
//   };
// });

// console.log(mujeres);

// let productos = [
//   { id: 1, nombre: "Camisa", precio: 1000 },
//   { id: 2, nombre: "Gorra", precio: 350 },
//   { id: 3, n, precio: 750 },
//   { id: 4, nombre: "Mediombre: "Zapato"a", precio: 500 },
// ];

// let copia = productos.slice(1, 3);
// console.log(copia);

class Libro {
  constructor(cantidadPaginas, precio) {
    this.cantidadPaginas = cantidadPaginas;
    this.precio = precio;
    this.reservado = false;
  }

  reservar() {
    this.reservado = true;
  }

  quitarReserva() {
    this.reservado = false;
  }
}

const libro1 = new Libro(54, 50000);
console.log(libro1);

libro1.reservar()
console.log(libro1);

libro1.quitarReserva()
console.log(libro1)
