  /*function verMas(){

    var elemento = document.getElementById("segundaFila");

    if(document.getElementById("boton").className == "fa fa-chevron-down")
    {
      elemento.className = "visible row mt-5 imgSmall";
      document.getElementById("boton").className = "fa fa-chevron-up";
    } else{
      elemento.className = "ocultar";
      document.getElementById("boton").className ="fa fa-chevron-down";
    }
  }*/

function verMas2(seccion){
let mostrarFila = "segundaFila"+seccion;
let nombreBoton = 'boton'+seccion
console.log(mostrarFila)
  var elemento = document.getElementById(mostrarFila);

  if(document.getElementById(nombreBoton).className == "fa fa-chevron-down")
  {
    elemento.className = "visible row mt-5 imgSmall";
    document.getElementById(nombreBoton).className = "fa fa-chevron-up";
  } else{
    elemento.className = "ocultar";
    document.getElementById(nombreBoton).className ="fa fa-chevron-down";
  }
}