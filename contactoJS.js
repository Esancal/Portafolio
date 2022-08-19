window.addEventListener("DOMContentLoaded", () => {
  // Con el evento DOMContentLoaded me aseguro que todas las
  // etiquetas HTML fueron cargadas y procesadas por el browser
  // Info en https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

  /* 
  Sintaxis de variables:
  let nombreDeVariable = valor;
  */
  let btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    console.log("Nombre: " + nombre);
    console.log("Correo: " + correo);
  });

  console.log("Evento DOMContentLoaded");
});

console.log("JS del head");
