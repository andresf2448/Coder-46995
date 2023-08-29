//setTimeout(funcion, tiempo)
// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
estructura de una promesa

new Promise((resolve, reject) => {
  //cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor
//         ? resolve(["juan", "sofia", "mariana"])
//         : reject("Promesa rechazada");
//     }, 2000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("proceso finalizado"));

///////////////////////////////////////////////////////////////////////////SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "media", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

const conseguirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("Intente luego!");
    }, 3000);
  });
};
///////////////////////////////////////////////////////////////////////////

conseguirProductos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
      <button id="boton${item.id}"></button>
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;

    document.body.append(div);
  });
