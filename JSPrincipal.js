function verMas(){

  var elemento = document.getElementById("segundaFila");

  if(document.getElementById("boton").innerText == "fa fa-chevron-down"){
    elemento.className = "visible";
    document.getElementById("boton").innerText = "ocultar";
  } else{
    elemento.className = "ocultar";
    document.getElementById("boton").innerText = className ="fa fa-chevron-up";
  }
}