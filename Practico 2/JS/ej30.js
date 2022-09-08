let contador = 0;
let fotoJ1, fotoJ2;

document.querySelector("#table1").hidden = false;

document.querySelector("#IMG1").addEventListener("click", elegir1);
document.querySelector("#IMG2").addEventListener("click", elegir2);
document.querySelector("#IMG3").addEventListener("click", elegir3);
document.querySelector("#IMG4").addEventListener("click", elegir4);
document.querySelector("#IMG5").addEventListener("click", elegir5);

function elegir1(){
    if (contador === 0){
        fotoJ1 = "../IMG/circulo.png";
    }else{
        fotoJ2 = "../IMG/circulo.png";
    }
    contador ++;
    document.querySelector("#IMG1").setAttribute("src", "../IMG/blanco.png");
    jugar();
    document.querySelector("#IMG1").removeEventListener("click", elegir1);
}
function elegir2(){
    if (contador === 0){
        fotoJ1 = "../IMG/cruz.png";
    }else{
        fotoJ2 = "../IMG/cruz.png";
    }
    contador ++;
    document.querySelector("#IMG2").setAttribute("src", "../IMG/blanco.png");
    jugar();
    document.querySelector("#IMG2").removeEventListener("click", elegir2);
}
function elegir3(){
    if (contador === 0){
        fotoJ1 = "../IMG/mickey.jpg";
    }else{
        fotoJ2 = "../IMG/mickey.jpg";
    }
    contador ++;
    document.querySelector("#IMG3").setAttribute("src", "../IMG/blanco.png");
    jugar();
    document.querySelector("#IMG3").removeEventListener("click", elegir3);
}
function elegir4(){
    if (contador === 0){
        fotoJ1 = "../IMG/pluto.jpg";
    }else{
        fotoJ2 = "../IMG/pluto.jpg";
    }
    contador ++;
    document.querySelector("#IMG4").setAttribute("src", "../IMG/blanco.png");
    jugar();
    document.querySelector("#IMG4").removeEventListener("click", elegir4);
}
function elegir5(){
    if (contador === 0){
        fotoJ1 = "../IMG/tribilin.jpg";
    }else{
        fotoJ2 = "../IMG/tribilin.jpg";
    }
    contador ++;
    document.querySelector("#IMG5").setAttribute("src", "../IMG/blanco.png");
    jugar();
    document.querySelector("#IMG5").removeEventListener("click", elegir5);
}

function jugar(){
    if (contador === 2){
    document.querySelector("h1").innerHTML = "A JUGAR!";
    document.querySelector("#table1").hidden = true;
    document.querySelector("#table2").hidden = false;
    }

}

let turno = 0; 
document.querySelector("#img1").addEventListener("click", cambiarFoto1);
document.querySelector("#img2").addEventListener("click", cambiarFoto2);
document.querySelector("#img3").addEventListener("click", cambiarFoto3);
document.querySelector("#img4").addEventListener("click", cambiarFoto4);
document.querySelector("#img5").addEventListener("click", cambiarFoto5);
document.querySelector("#img6").addEventListener("click", cambiarFoto6);
document.querySelector("#img7").addEventListener("click", cambiarFoto7);
document.querySelector("#img8").addEventListener("click", cambiarFoto8);
document.querySelector("#img9").addEventListener("click", cambiarFoto9);

function cambiarFoto1() {
    if (document.querySelector("#img1").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img1").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img1").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img1").getAttribute("src") === document.querySelector("#img2").getAttribute("src") && document.querySelector("#img2").getAttribute("src") === document.querySelector("#img3").getAttribute("src") && document.querySelector("#img3").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img4").getAttribute("src") && document.querySelector("#img4").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }

function cambiarFoto2() {
    if (document.querySelector("#img2").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img2").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img2").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img1").getAttribute("src") === document.querySelector("#img2").getAttribute("src") && document.querySelector("#img2").getAttribute("src") === document.querySelector("#img3").getAttribute("src") && document.querySelector("#img3").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img2").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }

function cambiarFoto3() {
    if (document.querySelector("#img3").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img3").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img3").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img1").getAttribute("src") === document.querySelector("#img2").getAttribute("src") && document.querySelector("#img2").getAttribute("src") === document.querySelector("#img3").getAttribute("src") && document.querySelector("#img3").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png")  ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }

function cambiarFoto4() {
    if (document.querySelector("#img4").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img4").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img4").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img4").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img4").getAttribute("src") && document.querySelector("#img4").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
     }
}

function cambiarFoto5() {
    if (document.querySelector("#img5").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img5").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img5").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img4").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img2").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png") ) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }

function cambiarFoto6() {
    if (document.querySelector("#img6").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img6").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img6").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img4").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }

  function cambiarFoto7() {
    if (document.querySelector("#img7").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img7").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img7").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img7").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img4").getAttribute("src") && document.querySelector("#img4").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img7").getAttribute("src") && document.querySelector("#img7").getAttribute("src") !== "../IMG/blanco.png") ) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }
  
  function cambiarFoto8() {
    if (document.querySelector("#img8").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img8").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img8").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img7").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img2").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") !== "../IMG/blanco.png")) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }
  
  function cambiarFoto9() {
    if (document.querySelector("#img9").getAttribute("src") === "../IMG/blanco.png") {
      turno++;
      if (turno % 2 === 0) {
        document.querySelector("#img9").setAttribute("src", fotoJ2);
      } else {
        document.querySelector("#img9").setAttribute("src", fotoJ1);
      }
      if ((document.querySelector("#img7").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png")  ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }