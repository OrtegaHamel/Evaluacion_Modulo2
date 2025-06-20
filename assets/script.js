$(document).ready(function () {
  $("#banner")
    .removeClass("d-none")
    .hide()
    .fadeIn(1500, function () {
      $("#intro").slideDown(800);
    });
});

$(document).ready(function () {
  $("#listaConsejos").hide().slideToggle(1000);

  $("#contactoForm").submit(function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
  });

  $("#verResultado").click(function () {
    const r = $("#respuesta").val();
    if (r === "3") {
      $("#resultado").html(
        '<div class="alert alert-success">¡Correcto! Esa es una contraseña segura.</div>'
      );
    } else {
      $("#resultado").html(
        '<div class="alert alert-danger">Respuesta incorrecta. Revisa los consejos.</div>'
      );
    }
  });
});

$(document).ready(function () {
  $(".threat-card")
    .addClass("shadow")
    .hide()
    .each(function (i) {
      $(this)
        .delay(i * 300)
        .fadeIn(500);
    });
});
