let guitarras = [
    { tipo: 1, nombre: "clásica", precio: 2000 },
    { tipo: 2, nombre: "eléctrica", precio: 2500 },
    { tipo: 3, nombre: "electroacústica", precio: 2300 }
]

class Venta{
    constructor(tipoG, cant){
        this.tipoGuitarra = tipoG;
        this.cantidad = cant;
    }
}


function armarComboGuitarras() {
    document.querySelector("#slcGuitarra").innerHTML = `<option value="-1">Seleccione...</option>`;

    for (let i = 0; i < guitarras.length ; i++){
        const objGuitarra = guitarras[i];
        document.querySelector("#slcGuitarra").innerHTML += `<option value="${objGuitarra.tipo}">${objGuitarra.nombre}</option>`
    }
}

armarComboGuitarras();

let ventas = [];

document.querySelector("#btnVender").addEventListener("click", venderGuitarras);

function venderGuitarras(){
    let cantidad = Number(document.querySelector("#txtCantidad").value);
    let tipo = Number(document.querySelector("#slcGuitarra").value);

    if(!isNaN(cantidad) && tipo!== -1){
        let venta = new Venta(tipo, cantidad);
        ventas.push(venta);
        armarTabla();
    }else{
        //error
    }

}

function obtenerTotalMoney(tipoG){
    let totalMoney;
    let cantGuitarrasTipo = 0 ;
    let precioGuitarra;
    
    for (let i = 0; i < ventas.length ; i++){
        const objVenta = ventas[i];

        if (objVenta.tipoGuitarra === tipoG){
            cantGuitarrasTipo += objVenta.cantidad;
        }

    }
    
    for (let i = 0 ; i < guitarras.length ; i++){
        const objGuitarra = guitarras[i];

        if (objGuitarra.tipo === tipoG){
            precioGuitarra = objGuitarra.precio;
            break;
        }

    }

    totalMoney = cantGuitarrasTipo * precioGuitarra
    return totalMoney;
}

function armarTabla(){
    document.querySelector("#tabla").innerHTML = `<table border = "1">
    <thead>
      <tr>
        <th>Nombre de Guitarra</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody id="tblDatos"></tbody>
  </table>`;

    for(let i = 0 ; i < guitarras.length ; i++){
        const unaGuitarra = guitarras[i];
        document.querySelector("#tblDatos").innerHTML += `<tr>
        <td> ${unaGuitarra.nombre}</td>
        <td> ${obtenerTotalMoney(unaGuitarra.tipo)} </td>
        </tr>`
    }
}
