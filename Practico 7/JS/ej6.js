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

//mostrarBotones("btn");

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
  switch (seccion) {
    case "seccionProcesar":
      armarTablaVotos();
      break;
  }
}

mostrarSeccion("seccionAgregar");

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

class Partido {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.votos;
    this.representantes;
    this.votosResiduo;
  }
}

let partidos = [
  new Partido(1, "Partido al medio"),
  new Partido(2, "Partido en partes"),
  new Partido(3, "Partido en 2")
];

listarPartidos();

let idPartidoActual = 4;

document.querySelector("#btnAgregar").addEventListener("click", agregarPartido);

function agregarPartido() {
  let nombre = document.querySelector("#txtNombre").value;
  let id = idPartidoActual;
  let partido = new Partido(id, nombre);
  idPartidoActual++;
  partidos.push(partido);
  listarPartidos();
}

//partidos.splice(0, 1);

function listarPartidos() {
  document.querySelector("#tblPartidos").innerHTML = "";
  for (let i = 0; i < partidos.length; i++) {
    const partido = partidos[i];
    document.querySelector("#tblPartidos").innerHTML += `<tr>
        <td>${partido.id}</td>
        <td>${partido.nombre}</td>
        <td><input type="button" value="X" data-partido="${partido.id}" class="eliminar"></td>
        </tr>`;
  }
  //acá
  let botonesElim = document.querySelectorAll(".eliminar");
  for (let i = 0; i < botonesElim.length; i++) {
    const botonElim = botonesElim[i];
    botonElim.addEventListener("click", eliminarPartido);
  }
}

function armarTablaVotos() {
  document.querySelector("#tblVotos").innerHTML = "";
  for (let i = 0; i < partidos.length; i++) {
    const partidoP = partidos[i];
    document.querySelector("#tblVotos").innerHTML += `<tr>
        <td>${partidoP.nombre}</td>
        <td><input type="text" id="votos${partidoP.id}"></td>
        </tr>`;
  }
}

document.querySelector("#btnProcesar").addEventListener("click", procesarVotos);

let representantesElegir = 21;
let totalVotosEmitidos = 0;
let votosPorRepresentante;
let representantesRestantes = representantesElegir;

function procesarVotos() {
  for (let i = 0; i < partidos.length; i++) {
    const partP = partidos[i];
    let votosPartido = Number(
      document.querySelector("#votos" + partP.id).value
    );
    partP.votos = votosPartido;
    totalVotosEmitidos += votosPartido;
  }

  votosPorRepresentante = totalVotosEmitidos / representantesElegir;

  for (let i = 0; i < partidos.length; i++) {
    const partidoPol = partidos[i];
    partidoPol.representantes = Math.floor(
      partidoPol.votos / votosPorRepresentante
    );
    representantesRestantes -= partidoPol.representantes;
    partidoPol.votosResiduo = partidoPol.votos % votosPorRepresentante;
  }
  partidos.sort(criterio);
  for (let i = 0; i < representantesRestantes; i++) {
    const part = partidos[i];
    part.representantes++;
  }
}

function criterio(a, b) {
  //console.log("Ordenando");
  let dev = 1;
  if (a.votosResiduo > b.votosResiduo) {
    dev = -1;
  }
  return dev;
}

function eliminarPartido() {
  let idPartidoEliminar = Number(this.getAttribute("data-partido"));
  let posEliminar = buscarPosElemento(partidos, "id", idPartidoEliminar);
  let partidoEliminar = buscarElemento(partidos, "id", idPartidoEliminar);
  let hacer = confirm(
    "¿Esta seguro/a que quiere eliminar a " + partidoEliminar.nombre + "?"
  );
  if (hacer) {
    partidos.splice(posEliminar, 1);
    listarPartidos();
  }
}

function buscarPosElemento(arr, prop, valor) {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem[prop] === valor) {
      pos = i;
      break;
    }
  }
  return pos;
}
