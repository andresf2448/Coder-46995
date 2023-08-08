let boton = document.getElementById("boton");

//primera forma

// boton.addEventListener("click", () => {
//   console.log("Hola");
// });

//segunda forma

// boton.onclick = () => {
//   console.log("Hola");
// };

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, () => {
//   console.log("Hola");
// });

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludar("Romina"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("dlbclick", () => console.log("dlbclick"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("click", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "azul";
// });

let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "amarillo";
//   } else if (e.key === "d") {
//     saludo.className = "verde";
//   } else {
//     saludo.className = "azul";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  if (!inputs[0].value.includes("@")) {
    inputs[0].value = "";
  }
});
