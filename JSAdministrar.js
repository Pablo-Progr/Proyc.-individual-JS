/*class helado{
    constructor(codigo,sabor,descripcion,){
        this.codigo = codigo;
        this.sabor = sabor;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}*/

class Peliculas{
    constructor(codigo,pelicula, categoria, descripcion,publicado,opcion) {
        this.codigo = codigo;
        this.pelicula = pelicula
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.publicado = publicado;
        this.opcion = opcion;
    }
}

/*var listaHelados = [];
leer();*/

var listaPeliculas = [];
leer();

/*if(localStorage.length > 0 && listaHelados.length == 0){
    listaHelados = JSON.parse(localStorage.getItem("heladoKey"));
}*/

if (localStorage.length > 0 && listaPeliculas.length == 0) {
    listaPeliculas = JSON.parse(localStorage.getItem("peliculaKey"));
}

/*function agregar(){
    //Obterner Todos Los Datos En El Formulario
    let codigo = document.getElementById("codigo").value;
    let sabor = document.getElementById("sabor").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    //Crear El Objeto Helado
    let heladoItem = new helado(codigo, sabor, descripcion, imagen);
    
    //Agregar El Objeto Dentro De Arreglo
    listaHelados.push(heladoItem);

    //Guardar El Arreglo Dentro Del Local Storge
    localStorage.setItem("heladoKey",JSON.stringify(listaHelados));

    //Llamo A Leer Para Que Se Dibuje En La Tabla El Nuevo Helado
    leer();
}*/

function agregar() {
    let codigo = document.getElementById("codigo").value;
    let pelicula = document.getElementById("pelicula").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;

    let peliculaItem = new Peliculas(codigo,pelicula,categoria,descripcion,"","");
    
    console.log(peliculaItem);
    console.log(listaPeliculas);
    listaPeliculas.push(peliculaItem);

    localStorage.setItem("peliculaKey", JSON.stringify(listaPeliculas));

    leer();
}

/*function leer(){
    //Traer Arreglo Del LocalStorage
    let arregloAux = JSON.parse(localStorage.getItem("heladoKey"));
    
    dibujarTabla(arregloAux);
}*/

function leer() {
    let arregloAux = JSON.parse(localStorage.getItem("peliculaKey"));

    dibujarTabla(arregloAux);
}

/*function dibujarTabla(arregloAux1){
    //Voy A Recorrer Cada Objeto De Mi ArregloAux
    borrarTabla();
    for(index in arregloAux1){
        console.log(arregloAux1[index].codigo);
        console.log(arregloAux1[index].sabor);
        console.log(arregloAux1[index].descripcion);
        console.log(arregloAux1[index].imagen);

        //Crear Los Elemtos De La Tabla
        let fila = document.createElement("tr");
        let celdaCodigo = document.createElement("td");
        let celdaSabor = document.createElement("td");
        let celdaDescripcion = document.createElement("td");
        let celdaImagen = document.createElement("td");
        let celadaBotones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let botonModificar = document.createElement("button");
        let botonFavorito = document.createElement("button");

        //Agregar Valores A Las Celdas
        celdaCodigo.innerText = arregloAux1[index].codigo;
        celdaSabor.innerText = arregloAux1[index].sabor;
        celdaDescripcion.innerText = arregloAux1[index].descripcion;
        celdaImagen.innerText = arregloAux1[index].imagen;
        botonEliminar.innerText = "";
        botonModificar.innerText = "";
        botonFavorito.innerText = "";

        //Greagar Al Boton Eliminar En La Propieda Id El Codigo
        botonEliminar.id = arregloAux1[index].codigo;
        //Agreagar El Evento Click
        botonEliminar.addEventListener("click",eliminar);

        botonModificar.id = arregloAux1[index].codigo;
        botonModificar.addEventListener("click",modificar);

        botonFavorito.id = arregloAux1[index].codigo;
        botonFavorito.addEventListener("click",favorito)

        botonEliminar.className = "fa fa-trash btn btn-success";
        botonModificar.className = "fa fa-pencil-square-o ml-3 btn btn-success"
        botonFavorito.className = "fa fa-star btn btn-success ml-3"

        //Unir Padres Con Sus Hijos
        celadaBotones.appendChild(botonEliminar);
        celadaBotones.appendChild(botonModificar);
        celadaBotones.appendChild(botonFavorito);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaSabor);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaImagen);
        fila.appendChild(celadaBotones);
        
        //Traer Al TBody
        let tbody = document.getElementById("tbody");
        tbody.appendChild(fila);
        tbody.className="text-light"


    }

}*/

function dibujarTabla(arregloAux1) {
    borrarTabla();

    for (index in arregloAux1) {
        console.log(arregloAux1[index].codigo);
        console.log(arregloAux1[index].pelicula);
        console.log(arregloAux1[index].categoria);
        console.log(arregloAux1[index].descripcion);

        let fila = document.createElement("tr");
        let celdaCodigo = document.createElement("td");
        let celdaPelicula = document.createElement("td");
        let celdaCategoria = document.createElement("td");
        let celdaDescripcion = document.createElement("td");
        let celdaCheckbox = document.createElement("td");
        let checkbox = document.createElement("input");
        let celadaBotones = document.createElement("td");
        celadaBotones.className = "d-flex"
        let botonEliminar = document.createElement("button");
        let botonModificar = document.createElement("button");
        let botonFavorito = document.createElement("button");

        celdaCodigo.innerText = arregloAux1[index].codigo;
        celdaPelicula.innerText = arregloAux1[index].pelicula;
        celdaCategoria.innerText = arregloAux1[index].categoria;
        celdaDescripcion.innerText = arregloAux1[index].descripcion;
        botonEliminar.innerText = "";
        botonModificar.innerText = "";
        botonFavorito.innerText = "";

        botonEliminar.id = arregloAux1[index].codigo;
        botonEliminar.addEventListener("click",eliminar);

        botonModificar.id = arregloAux1[index].codigo;
        botonModificar.addEventListener("click",modificar);

        botonFavorito.id = arregloAux1[index].codigo;
        botonFavorito.addEventListener("click",favorito);

        checkbox.type = "checkbox";

        botonEliminar.className = "fa fa-trash btn btn-success";
        botonModificar.className = "fa fa-pencil-square-o btn btn-success ml-2";
        botonFavorito.className = "fa fa-star btn btn-success ml-2";

        celadaBotones.appendChild(botonEliminar);
        celadaBotones.appendChild(botonModificar);
        celadaBotones.appendChild(botonFavorito);
        celdaCheckbox.appendChild(checkbox);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaPelicula);
        fila.appendChild(celdaCategoria);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaCheckbox);
        fila.appendChild(celadaBotones);

        let tbody = document.getElementById("tbody");
        tbody.appendChild(fila);
        tbody.className="text-light";
    }
}

/*function borrarTabla() {
    let tbody = document.getElementById("tbody");
    //Mientras Tbody Tenga Hijos
    if (tbody.children.length > 0) {
        //Mientras Exista El Primer Hijos
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }
}*/

function borrarTabla(){
    let tbody = document.getElementById("tbody");

    if(tbody.children.length > 0){

        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }
    }
}


/*function eliminar() {
    console.log(this.id)
    let arreglo = JSON.parse(localStorage.getItem("heladoKey"));
    let codigo = this.id;

    //Quitar Del Arreglo El Helado Que Tenga El ThisId

    let arregloNuevo = arreglo.filter(function (helado) {
        return helado.codigo != codigo;
    })

    //Ahora Guardo El Nuevo Arreglo
    localStorage.setItem("heladoKey", JSON.stringify(arregloNuevo));

    leer();
}*/

function eliminar(){
    console.log(this.id,"hhooo") 
    let arreglo = JSON.parse(localStorage.getItem("peliculaKey"));
    let codigo = this.id;

    let arregloNuevo = arreglo.filter(function(pelicula){
        return pelicula.codigo != codigo;
    })

    localStorage.setItem("peliculaKey", JSON.stringify(arregloNuevo));

    leer();
}

/*function modificar() {
    // let ventanaModal = document.getElementById("exampleModal");

    $("#exampleModal").modal("show");
    let arreglo = JSON.parse(localStorage.getItem("heladoKey"));
    let codigo = this.id;

    //Quitar Del Arreglo El Helado Que Tenga El ThisId

    let arregloNuevo = arreglo.filter(function (helado) {
        return helado.codigo == codigo;
    })

    document.getElementById("sabor").value = arregloNuevo[0].sabor;

}*/


function modificar(){
    $("#exampleModal").modal("show");
    let arreglo = JSON.parse(localStorage.getItem("peliculaKey"));
    let codigo = this.id;

    let arregloNuevo = arreglo.filter(function(pelicula){
        return pelicula.codigo == codigo;
    })

    document.getElementById("pelicula").value = arregloNuevo[0].pelicula;
}

function favorito(){

}