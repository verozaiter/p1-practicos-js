class Venta{
    constructor(marca, modelo, precio, cant){
        this.marcaCel = marca;
        this.modeloCel = modelo;
        this.precioCel = precio;
        this.cantidad = cant;
    }
}

let marcasCel = [
    {codigo: "Samsung", nombre: "Samsung"},
    {codigo: "Sony", nombre: "Sony"},
    {codigo: "LG", nombre: "LG"}
];

function armarComboMarcasCel() {
    document.querySelector("#slcMarca").innerHTML = `<option value="-1">Seleccione...</option>`;

    for (let i = 0; i < marcasCel.length ; i++){
        const objMarca = marcasCel[i];
        document.querySelector("#slcMarca").innerHTML += `<option value="${objMarca.codigo}">${objMarca.nombre}</option>`
    }
}

armarComboMarcasCel();

let ventas = [];


document.querySelector("#btnListar").addEventListener("click", agregarVenta);

function agregarVenta(){
    let marca = document.querySelector("#slcMarca").value;
    let modelo = document.querySelector("#txtModelo").value;
    let precio = Number(document.querySelector("#txtPrecio").value);
    let cantidad = Number(document.querySelector("#txtCantidadUnidades").value);

    if(!isNaN(precio) && modelo!== "" && marca !== "-1" && cantidad !== 0){
        let venta = new Venta(marca, modelo, precio, cantidad);
        ventas.push(venta);
        armarTablaMayores();
    }else{
        //error
    }
}

function armarTablaMayores(){

    for(let i = 0 ; i < ventas.length ; i++){
        const unaVenta = ventas[i];

        if (obtenerTotal(unaVenta.precioCel, unaVenta.cantidad) > 2000){
        document.querySelector("#tabla").innerHTML = `<table border = "1">
        <thead>
        <tr>
        <th>Marca Celular</th>
        <th>Modelo</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Monto Total</th>
        </tr>
        </thead>
        <tbody id="tblDatos"></tbody>
        </table>`;
        break;
        }
    }
   
    for(let i = 0 ; i < ventas.length ; i++){
        const unaVenta = ventas[i];

        if (obtenerTotal(unaVenta.precioCel, unaVenta.cantidad) > 2000){
            document.querySelector("#tblDatos").innerHTML += `<tr>
            <td> ${unaVenta.marcaCel}</td>
            <td> ${unaVenta.modeloCel}</td>
            <td> ${unaVenta.precioCel}</td>
            <td> ${unaVenta.cantidad}</td>
            <td> ${obtenerTotal(unaVenta.precioCel, unaVenta.cantidad)} </td>
            </tr>`   
        }
    }
}

function obtenerTotal(precio, cant){
    return precio * cant;
}

document.querySelector("#btnUnidadesVendidasModelo").addEventListener("click", buscarModelo);

function buscarModelo(){
    let modelo = document.querySelector("#txtModeloIngresado").value;
    let cantidad = 0;

    for(let i = 0 ; i < ventas.length ; i++){
        if(modelo === ventas[i].modeloCel){
            cantidad += ventas[i].cantidad;
        }
    }

    if(cantidad > 0){
    document.querySelector("#pRespuesta").innerHTML = "La cantidad de unidades vendidas es de: " + cantidad + ".";
    }else{
    document.querySelector("#pRespuesta").innerHTML = "Ese modelo no ha sido vendido aún.";
    }
}