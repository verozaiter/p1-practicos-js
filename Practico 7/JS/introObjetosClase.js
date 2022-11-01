class Monstruo {
    constructor(nombreM, cantOjosM, ocupacionM, colorM, peludoM) {
      //console.log("Creando un monstruo");
      this.nombre = nombreM;
      this.cantidadOjos = cantOjosM;
      this.ocupacion = ocupacionM;
      this.color = colorM;
      this.peludo = peludoM;
    }
    saludar() {
      console.log(`Hola, soy ${this.nombre} y soy ${this.ocupacion}`);
    }
    cambiarOcupacion(nuevaOcupacion) {
      if (this.ocupacion === "recoge latas" && nuevaOcupacion === "comediante") {
        this.ocupacion = nuevaOcupacion;
      }
    }
    asustar() {
      let susto;
      if (this.ocupacion === "asustador") {
        susto = "GGGGRRRROOOOOOAAAARRRRRRR";
      } else {
        susto = "bu";
      }
      return susto;
    }
    agregarOjos(cantOjos) {
      this.cantidadOjos += cantOjos;
      return this.cantidadOjos;
    }
  }
  
  let sully = new Monstruo("Sullivan", 2, "asustador", "Celeste", true);
  
  sully.cambiarOcupacion("comediante");
  sully.saludar();
  console.log(sully.asustar());
  
  let mike = new Monstruo("Mike", 1, "recoge latas", "Verde", false);
  mike.cambiarOcupacion("comediante");
  mike.saludar();
  console.log(mike.asustar());
  
  let squishy = new Monstruo("Squishy", 5, "asustador", "Rosado", false);
  console.log(squishy.agregarOjos(2));
  
  let monstruos = [
    new Monstruo("Sullivan", 2, "asustador", "Celeste", true),
    new Monstruo("Mike", 1, "recoge latas", "Verde", false),
    new Monstruo("Squishy", 5, "asustador", "Rosado", false)
  ];
  
  console.log(monstruos[2].nombre.charAt(0));
  
  document.querySelector("#btnAgregar").addEventListener("click", agregarMonstruo);
  
  function agregarMonstruo() {
    let nombre = document.querySelector("#txtNombre").value;
    let cantidadOjos = Number(document.querySelector("#txtOjos").value);
    let ocupacion = document.querySelector("#txtOcupacion").value;
    let color = document.querySelector("#txtColor").value;
    let peludo = document.querySelector("#slcPeludo").value;
    let peludoAgregar;
    if (peludo === "s") {
      peludoAgregar = true;
    } else {
      peludoAgregar = false;
    }
    let monstruo = new Monstruo(
      nombre,
      cantidadOjos,
      ocupacion,
      color,
      peludoAgregar
    );
    monstruos.push(monstruo);
    listarMonstruos();
  }
  
  function listarMonstruos() {
    document.querySelector("#tblMonstruos").innerHTML = "";
    for (let i = 0; i < monstruos.length; i++) {
      document.querySelector("#tblMonstruos").innerHTML += `<tr>
          <td>${monstruos[i].nombre}</td>
          <td>${monstruos[i].cantidadOjos}</td>
          <td>${monstruos[i].color}</td>
          <td>${monstruos[i].peludo}</td>
      </tr>`;
    }
  }
  