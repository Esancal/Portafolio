$(document).ready(function () {
  // similar a querySelectorAll()
  // param es un string con selector CSS
  $("#cabecera").load("parts/header.html");
  $("#pie-pagina").load("parts/footer.html");

  $("#btnEnviar").on("click", function () {
    const nombre = itsBlank($("#nombre").val(), "Nombre");
    const email = getCorreo($("#correo").val());
    const titulo = itsBlank($("#titulo").val(), "Titulo");
    const razon = getRazon($("input[name='razon']:checked").val());
    const mensaje = itsBlank($("#mensaje").val(), "Mensaje");
    const fecha_mensaje = new Date();

    const baseUrl = "https://portafolio-f3200-default-rtdb.firebaseio.com";
    const url = baseUrl + "/contacto.json";
    $.ajax(url, {
      method: "POST",
      data: JSON.stringify({
        nombre,
        email,
        titulo,
        razon,
        mensaje,
        fecha_mensaje,
      }),
    })
      .done(function (d) {
        alert("Se insertó su mensaje con ID: " + d.name);
      })
      .fail(function () {
        alert("Su mensaje no pudo ser guardado, por favor intente mas tarde");
      });
  });

  function itsBlank(value, name) {
    if (value == "") {
      console.log(name + ": El campo esta vacio");
    } else {
      console.log(name + ": El campo no esta vacio");
      if (name == "Nombre" && value.length > 100) {
        console.log("Nombre: Cantidad de caracteres superior a 100");
      }
      if (name == "Titulo" && value.length > 80) {
        console.log("Titulo: Cantidad de caracteres superior a 80");
      }
      if (name == "Mensaje" && value.length > 1300) {
        console.log("Mensaje: Cantidad de caracteres superior a 1300");
      }
    }
  }

  function getCorreo(correo) {
    emailRegex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (emailRegex.test(correo)) {
      console.log("Correo: Formato correcto");
    } else {
      console.log("Correo: Formato incorrecto");
    }
  }

  function getRazon(razon) {
    // Si no seleccionan razon = undefined
    if (razon == undefined) {
      console.log("Razon: undefined");
    }
  }
});
