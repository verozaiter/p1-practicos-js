let contador = 0; 

document.querySelector("#btnContarDeA3").addEventListener("click", aumentarCuenta);

function aumentarCuenta() {
  contador+= 3;
  document.querySelector("#pCuenta").innerHTML = contador;
}
