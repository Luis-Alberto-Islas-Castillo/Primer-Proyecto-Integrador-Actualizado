   (function ($) {
    "use strict"; // Start of use strict

    // Desplasamiento jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // cierra el menu
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Active scrollspy para agregar una clase activa 
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Contraer barra de navegación
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Contraer ahora si la página no está en la parte superior
    navbarCollapse();
    // Contraer la barra de navegación cuando se desplaza la página
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
