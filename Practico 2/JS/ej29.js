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
        document.querySelector("#img1").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img1").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img2").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img2").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img3").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img3").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img4").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img4").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img5").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img5").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img6").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img6").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img7").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img7").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img8").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img8").setAttribute("src", "../IMG/cruz.png");
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
        document.querySelector("#img9").setAttribute("src", "../IMG/circulo.png");
      } else {
        document.querySelector("#img9").setAttribute("src", "../IMG/cruz.png");
      }
      if ((document.querySelector("#img7").getAttribute("src") === document.querySelector("#img8").getAttribute("src") && document.querySelector("#img8").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ||
        (document.querySelector("#img3").getAttribute("src") === document.querySelector("#img6").getAttribute("src") && document.querySelector("#img6").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png")  ||
        (document.querySelector("#img1").getAttribute("src") === document.querySelector("#img5").getAttribute("src") && document.querySelector("#img5").getAttribute("src") === document.querySelector("#img9").getAttribute("src") && document.querySelector("#img9").getAttribute("src") !== "../IMG/blanco.png") ) {
        document.querySelector("#h1Ganador").innerHTML = "GANASTE";
      }
    }
  }