class helado{
    constructor(codigo,sabor,descripcion,imagen){
        this.codigo = codigo;
        this.sabor = sabor;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

var listaHelados = [];
leer();

if(localStorage.length > 0 && listaHelados.length == 0){
    listaHelados = JSON.parse(localStorage.getItem("heladoKey"));
}

function agregar(){
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
}

function leer(){
    //Traer Arreglo Del LocalStorage
    let arregloAux = JSON.parse(localStorage.getItem("heladoKey"));
    
    dibujarTabla(arregloAux);
}

function dibujarTabla(arregloAux1){
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

        //Agregar Valores A Las Celdas
        celdaCodigo.innerText = arregloAux1[index].codigo;
        celdaSabor.innerText = arregloAux1[index].sabor;
        celdaDescripcion.innerText = arregloAux1[index].descripcion;
        celdaImagen.innerText = arregloAux1[index].imagen;
        botonEliminar.innerText = "";
        botonModificar.innerText = "";

        //Greagar Al Boton Eliminar En La Propieda Id El Codigo
        botonEliminar.id = arregloAux1[index].codigo;
        //Agreagar El Evento Click
        botonEliminar.addEventListener("click",eliminar);

        botonModificar.id = arregloAux1[index].codigo;
        botonModificar.addEventListener("click",modificar);

        botonEliminar.className = "fa fa-trash btn btn-success";
        botonModificar.className = "fa fa-exchange ml-3 btn btn-success"

        //Unir Padres Con Sus Hijos
        celadaBotones.appendChild(botonEliminar);
        celadaBotones.appendChild(botonModificar);
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

}

function borrarTabla(){
    let tbody = document.getElementById("tbody");
    //Mientras Tbody Tenga Hijos
    if(tbody.children.length > 0){
        //Mientras Exista El Primer Hijos
        while(tbody.firstChild){
             tbody.removeChild(tbody.firstChild);
        }
    }
}

function eliminar(){
    console.log(this.id)
  let arreglo = JSON.parse(localStorage.getItem("heladoKey"));
  let codigo = this.id;
  
  //Quitar Del Arreglo El Helado Que Tenga El ThisId

  let arregloNuevo = arreglo.filter(function(helado){
      return helado.codigo != codigo;
  })

  //Ahora Guardo El Nuevo Arreglo
  localStorage.setItem("heladoKey",JSON.stringify(arregloNuevo));

  leer(); 
}


function modificar(){
   // let ventanaModal = document.getElementById("exampleModal");
    
    $("#exampleModal").modal("show");
    let arreglo = JSON.parse(localStorage.getItem("heladoKey"));
    let codigo = this.id;
    
    //Quitar Del Arreglo El Helado Que Tenga El ThisId
  
    let arregloNuevo = arreglo.filter(function(helado){
        return helado.codigo == codigo;
    })

    document.getElementById("sabor").value = arregloNuevo[0].sabor;

}