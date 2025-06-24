$(document).ready(function () {
  // Banner fade in y mostrar intro
  $("#banner")
    .removeClass("d-none")
    .hide()
    .fadeIn(1500, function () {
      $("#intro").slideDown(800);
    });

  // Mostrar lista consejos con slideToggle
  $("#listaConsejos").hide().slideToggle(1000);

  // Manejo envío formulario contacto
  $("#contactoForm").submit(function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
  });

  // Validación respuesta y mostrar resultado
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
  const cards = $(".threat-wrapper");
  const carousel = $("#carouselContainer");

  // Ocultar el carrusel por seguridad (doble control)
  carousel.hide();

  // Mostrar tarjetas con retardo una a una
  cards.each(function (index) {
    $(this).delay(index * 400).fadeIn(600, function () {
      // Mostrar el carrusel después de la última tarjeta
      if (index === cards.length - 1) {
        carousel.fadeIn(800);
      }
    });
  });
});


