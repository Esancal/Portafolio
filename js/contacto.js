$(document).ready(function () {
  // similar a querySelectorAll()
  // param es un string con selector CSS
  $("#cabecera").load("parts/header.html");
  $("#pie-pagina").load("parts/footer.html");

  $("#btnEnviar").on("click", function () {
    const nombre = itsBlank($("#nombre").val(), "nombre");
    const email = getCorreo($("#correo").val());
    const titulo = itsBlank($("#titulo").val(), "titulo");
    const razon = getRazon($("input[name='razon']:checked").val());
    const mensaje = itsBlank($("#mensaje").val(), "mensaje");
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
      $("#" + name).addClass("error");
    } else {
      console.log(name + ": El campo no esta vacio");
      if (name == "nombre" && value.length > 100) {
        console.log("Nombre: Cantidad de caracteres superior a 100");
        $("#nombre").addClass("error");
      } else if (name == "nombre") $("#nombre").removeClass("error");
      if (name == "titulo" && value.length > 80) {
        console.log("Titulo: Cantidad de caracteres superior a 80");
        $("#titulo").addClass("error");
      } else if (name == "titulo") $("#titulo").removeClass("error");
      if (name == "mensaje" && value.length > 1300) {
        console.log("Mensaje: Cantidad de caracteres superior a 1300");
        $("#mensaje").addClass("error");
      } else if (name == "mensaje") $("#mensaje").removeClass("error");
    }
  }

  function getCorreo(correo) {
    emailRegex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (emailRegex.test(correo)) {
      console.log("Correo: Formato correcto");
      $("#correo").removeClass("error");
    } else {
      console.log("Correo: Formato incorrecto");
      $("#correo").addClass("error");
    }
  }

  function getRazon(razon) {
    // Si no seleccionan razon = undefined
    if (razon == undefined) {
      console.log("Razon: undefined");
      $("#razonContacto").addClass("error");
    } else {
      $("#razonContacto").removeClass("error");
    }
  }
});
