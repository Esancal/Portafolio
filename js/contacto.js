window.addEventListener("DOMContentLoaded", () => {
  // Con el evento DOMContentLoaded me aseguro que todas las
  // etiquetas HTML fueron cargadas y procesadas por el browser
  // Info en https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

  /* 
  Sintaxis de variables:
  let nombreDeVariable = valor;
  */

  let razonContacto = getRazonContacto;

  let btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    console.log("Nombre: " + nombre);
    console.log("Correo: " + correo);
  });

  console.log("Evento DOMContentLoaded");
});

// Con esta funcion podremos ver que alternativa esta seleccionada
function getRazonContacto() {
  let entradaRazon = document.querySelector("input[name='razon']:checked");
  if(entradaRazon == null){
    mostrarError("Debe seleccionar una opcion");
    return false;
  }
}

//
function mostrarError () {
  console.error(mensajeDeError);
}

console.log("JS del head");
