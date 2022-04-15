$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
    //tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    //Evento correo enviado
    $("#EnviarCorreo").click(function(event){
      alert("Correo Enviado");
    });

    $("#title1-Toggle").click(function(event){
      $(".descripcion1").toggle();
    });
    $("#title2-Toggle").click(function(event){
      $(".descripcion2").toggle();
    });
    $("#title3-Toggle").click(function(event){
      $(".descripcion3").toggle();
    });

    //Cambio de color
    $(".h3-1-red").on("dblclick", function(){
      $(".h3-1-red").css({'color':'red'});
    });
    $(".h3-2-red").on("dblclick", function(){
      $(".h3-2-red").css({'color':'red'});
    });
  
});


