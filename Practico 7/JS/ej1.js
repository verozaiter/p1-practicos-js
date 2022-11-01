class Persona{
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
}

document.querySelector("#btnMostrar").addEventListener("click", agregarPersona);
document.querySelector("#btnMostrar").addEventListener("click", listarPersonas);
document.querySelector("#btnMostrarMayores").addEventListener("click", listarPersonasMayores);

let personas = [];

function agregarPersona() {
    let nombre = document.querySelector("#txtNombre").value;
    let edad = Number(document.querySelector("#txtEdad").value);
    let nacionalidad = document.querySelector("#txtNacionalidad").value;
    
    let persona = new Persona(
      nombre,
      edad,
      nacionalidad
    );
    personas.push(persona);
    listarPersonas();

    /* document.querySelector("#txtNombre").value = "";
    document.querySelector("#txtEdad").value = ""; 
    document.querySelector("#txtNacionalidad").value = "";  */


  }

  function listarPersonasMayores(){
    document.querySelector("#tblPersonasMayores").innerHTML = `<table border = "1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Nacionalidad</th>
        </tr>
    </thead>
    <tbody id="tblPersonasMayoresBody">
        
    </tbody>
</table>`;

    for (let i = 0 ; i < personas.length ; i++){
        if(personas[i].edad >= 18){
        document.querySelector("#tblPersonasMayoresBody").innerHTML += `
        <tr>
        <td>${personas[i].nombre}</td>
        <td>${personas[i].edad}</td>
        <td>${personas[i].nacionalidad}</td>
        </tr>`
        }
    }
}

function listarPersonas(){
    document.querySelector("#tblPersonas").innerHTML = `<table border = "1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Nacionalidad</th>
        </tr>
    </thead>
    <tbody id="tblPersonasBody">
        
    </tbody>
</table>`;
    for (let i = 0 ; i < personas.length ; i++){
        document.querySelector("#tblPersonasBody").innerHTML += ` <tr>
        <td>${personas[i].nombre}</td>
        <td>${personas[i].edad}</td>
        <td>${personas[i].nacionalidad}</td>
         </tr>`
    }
}
