
$( document ).ready(function() {
    $("#home").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").hide();
        $("#menu").show();
    });

    $("#accion").click(function(){
        $("#sectionaccion").show();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").hide();
        $("#menu").hide();
    });

    $("#terror").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").show();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").hide();
        $("#menu").hide();
    });

    $("#supervivencia").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").show();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").hide();
        $("#menu").hide();
    });

    $("#carreras").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").show();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").hide();
        $("#menu").hide();
    });

    $("#mundoabierto").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").show();
        $("#sectionfreetoplay").hide();
        $("#menu").hide();
    });

    $("#freetoplay").click(function(){
        $("#sectionaccion").hide();
        $("#sectionterror").hide();
        $("#sectionsupervivencia").hide();
        $("#sectioncarreras").hide();
        $("#sectionmundoabierto").hide();
        $("#sectionfreetoplay").show();
        $("#menu").hide();
    });

    $("#suscribir").click(function(){
        var str = $("#correo").text();
        alert("Correo almacenado con exito: "+str);
    });
});