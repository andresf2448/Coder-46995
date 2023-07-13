// let numero = parseInt(prompt("Ingrese el número a validar"));
// let cantDiv = 0;

// for(let i = 1; i <= numero; i++){
//   if(numero % i === 0){
//     cantDiv++;
//   }
// }

// if(cantDiv === 2){
//   alert("El numero ingreasdo es un numero primo")
// }else{
//   alert("El numero ingresado no es primo")
// }

let numero = prompt("Ingrese el numero");

while (numero != "ESC") {
  console.log("entramos con ", numero);

  switch (numero) {
    case "1":
      alert("Tomate");
      break;

    case "2":
      alert("Papa");
      break;

    case "3":
      alert("carne");
      break;

    case "4":
      alert("Pollo");
      break;

    default:
      alert("No está dentro de la lista");
      break;
  }

  numero = prompt("Ingrese el numero");
}