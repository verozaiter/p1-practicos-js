let contador = 0; 

document.querySelector("#btnContar").addEventListener("click", aumentarCuenta);

function aumentarCuenta() {
  contador++;
  document.querySelector("#pCuenta").innerHTML = contador;
}
