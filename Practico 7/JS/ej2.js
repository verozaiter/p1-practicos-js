let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
  const boton = botones[i];
  boton.addEventListener("click", cambiarSeccion);
}

function ocultarBotones() {
  let botones = document.querySelectorAll(".btn");
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "none";
  }
}

mostrarBotones("invitado");

function mostrarBotones(perfil) {
  ocultarBotones();
  let botones = document.querySelectorAll("." + perfil);
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "block";
  }
}

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    const unaSeccion = secciones[i];
    unaSeccion.style.display = "none";
  }
}

function cambiarSeccion() {
  let idBoton = this.getAttribute("id"); //"btnSeccionAgregar"
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4); //"s"+"eccionAgregar"
  mostrarSeccion(idSeccion);
}

function mostrarSeccion(seccion) {
  ocultarSecciones();
  document.querySelector("#" + seccion).style.display = "block";
}

mostrarSeccion("seccionAgregar");

let generos = ["Comedia", "Drama", "Ciencia Ficción"];

function armarGeneros() {
  document.querySelector(
    "#slcGenero"
  ).innerHTML = `<option value="x">Seleccione...</option>`;
  for (let i = 0; i < generos.length; i++) {
    const genero = generos[i];
    document.querySelector(
      "#slcGenero"
    ).innerHTML += `<option value="${genero}">${genero}</option>`;
  }
}

armarGeneros();

class Pelicula {
  constructor(nombre, estreno, genero, votantes, votos) {
    this.nombre = nombre;
    this.estreno = estreno;
    this.genero = genero;
    this.votantes = votantes;
    this.votos = votos;
  }
}

let peliculas = [];

document
  .querySelector("#btnAgregar")
  .addEventListener("click", agregarPelicula);

function agregarPelicula() {
  let nombre = document.querySelector("#txtNombre").value;
  let estreno = document.querySelector("#txtFecha").value;
  console.log(estreno);
  let genero = document.querySelector("#slcGenero").value;
  let votantes = Number(document.querySelector("#txtVotantes").value);
  let votos = Number(document.querySelector("#txtVotos").value);

  let peliculaBuscada = buscarElemento(peliculas, "nombre", nombre);
  if (peliculaBuscada === null) {
    let peliculaNueva = new Pelicula(nombre, estreno, genero, votantes, votos);
    peliculas.push(peliculaNueva);
    armarTabla();
  } else {
    //error
  }

  /*  if(!existe){
 
     } */
}

function buscarElemento(arr, prop, valor) {
  let elementoBuscado = null;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem[prop] === valor) {
      elementoBuscado = elem;
      break;
    }
  }
  return elementoBuscado;
}

function existeElemento(arr, prop, valor) {
  let existe = false;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem[prop] === valor) {
      existe = true;
      break;
    }
  }
  return existe;
}

/* let persona = { nombre: "Santiago", edad: 28 };

console.log(persona.nombre);
let laProp = "edad";
console.log(persona[laProp]); */

document.querySelector("#btnListar").addEventListener("click", armarTabla);

function armarTabla() {
  document.querySelector("#tblPeliculas").innerHTML = "";
  for (let i = 0; i < peliculas.length; i++) {
    const peli = peliculas[i];
    let promedio = peli.votos / peli.votantes;
    if (promedio >= 4) {
      document.querySelector("#tblPeliculas").innerHTML += `<tr>
            <td>${peli.nombre}</td>
            <td>${peli.estreno}</td>
            <td>${promedio.toFixed(2)}</td>
            </tr>`;
    }
  }
}

document.querySelector("#btnBuscar").addEventListener("click", buscarPeli);

function buscarPeli() {
  let peliculaBuscada = document.querySelector("#txtBusqueda").value;
  let objPeli = buscarElemento(peliculas, "nombre", peliculaBuscada);
  if (objPeli !== null) {
    document.querySelector(
      "#pPelicula"
    ).innerHTML = `Nombre: ${objPeli.nombre}<br>
        Genero: ${objPeli.genero}`;
  } else {
    document.querySelector("#pPelicula").innerHTML = "No existe";
  }
}
