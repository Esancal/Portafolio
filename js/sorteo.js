$(document).ready(function () {
  // similar a querySelectorAll()
  // param es un string con selector CSS
  $("#cabecera").load("parts/header.html");
  $("#pie-pagina").load("parts/footer.html");

  $("#btnEnviar").on("click", function () {
    const nombre = itsBlank($("#nombre").val(), "nombre");
    const email = getCorreo($("#correo").val());
    const recompenza = getRecompenza($("input[name='recompenza']:checked").val());
    const comentario = itsBlank($("#comentario").val(), "comentario");
    const fecha = new Date();

    const baseUrl = "https://portafolio-f3200-default-rtdb.firebaseio.com";
    const url = baseUrl + "/sorteo.json";
    $.ajax(url, {
      method: "POST",
      data: JSON.stringify({
        nombre,
        email,
        recompenza,
        comentario,
        fecha,
      }),
    })
      .done(function (d) {
        alert("Se insertaron sus preferencias con ID: " + d.name);
      })
      .fail(function () {
        alert("Sus preferencias no pudieron ser guardadadas, por favor intente mas tarde");
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
      if (name == "comentario" && value.length > 1300) {
        console.log("comentario: Cantidad de caracteres superior a 1300");
        $("#comentario").addClass("error");
      } else if (name == "comentario") $("#comentario").removeClass("error");
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

  function getRecompenza(recompenza) {
    // Si no seleccionan recompenza = undefined
    if (recompenza == undefined) {
      console.log("recompenza: undefined");
      $("#recompenzaSorteo").addClass("error");
    } else {
      $("#recompenzaSorteo").removeClass("error");
    }
  }
});
