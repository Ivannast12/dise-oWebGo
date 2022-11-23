
        $(document).ready(function()
        {

              // Cuando se pulse el boton dos veces

              $("#boton").dblclick(function(){
                $("#log").text("Se ha seleccionado dos veces el botón");
               });

            // Al redimensionar la ventana
            $(window).resize(function(){
                $("#log").text("Se ha redimensionado la ventana");
            })

            // Al hacer scroll en el documento
             $(window).scroll(function(){
                $("#log").text("Se ha hecho scroll en la página");
            });
            // Al hacer scroll en 'div2'
             $("#div2").scroll(function(){
                $("#log").text("Se ha hecho scroll en 'Cuadro chico'");
            });
        });
