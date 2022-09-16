// window.addEventListener("DOMContentLoaded", () => {
//   // Con el evento DOMContentLoaded me aseguro que todas las
//   // etiquetas HTML fueron cargadas y procesadas por el browser
//   // Info en https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

//   let razonContacto = getRazonContacto;

//   let btnEnviar = document.getElementById("btnEnviar");

//   btnEnviar.addEventListener("click", () => {
//     let nombre = document.getElementById("nombre").value;
//     let correo = document.getElementById("correo").value;

//     console.log("Nombre: " + nombre);
//     console.log("Correo: " + correo);
//   });

//   console.log("Evento DOMContentLoaded");
// });

// // Con esta funcion podremos ver que alternativa esta seleccionada
// function getRazonContacto() {
//   let entradaRazon = document.querySelector("input[name='razon']:checked");
//   if(entradaRazon == null){
//     mostrarError("Debe seleccionar una opcion");
//     return false;
//   }
// }

// //
// function mostrarError () {
//   console.error(mensajeDeError);
// }
$(document).ready(function () {
  // similar a querySelectorAll()
  // param es un string con selector CSS
  $("#cabecera").load("parts/header.html");
  $("#pie-pagina").load("parts/footer.html");

  $("#btnEnviar").on("click", function () {
    const nombre = $("#nombre").val();
    const email = $("#correo").val();
    const titulo = $("#titulo").val();
    const razon = $("input[name='razon']:checked").val();
    const mensaje = $("#mensaje").val();
    const fecha_mensaje = new Date;

    const baseUrl = "https://portafolio-f3200-default-rtdb.firebaseio.com";
    const url = baseUrl + "/contacto.json";
    $.ajax(url, {
      method: "POST",
      data: JSON.stringify({ nombre, email, titulo, razon, mensaje, fecha_mensaje }),
    })
      .done(function (d) {
        alert("Se insertó su mensaje con ID: " + d.name);
      })
      .fail(function () {
        alert(
          "Su mensaje no pudo ser guardado, por favor intente mas tarde"
        );
      });
  });
});
