// estructura del fetch    fetch(url, config)

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Primera publicación",
//     body: "Nuestra primera publicación de coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${producto.id}</h2>
//         <p>${producto.nombre}</p>
//         <b>$${producto.precio}</b>
//       `;

//       listado.append(li);
//     });
//   });

// const traerInfo = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(response);
// };

// traerInfo();

let listado = document.getElementById("listado");

const traerPublicaciones = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerPublicaciones();
