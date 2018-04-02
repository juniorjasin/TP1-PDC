jQuery(document).ready(function () {
    $('#isanpa').change(function () {
        /*Cada vez que el range cambie de valor, 
        se cambiará el texto del label valor-range con el valor del input */
        $('#isanpa-valoracion').html($(this).val());
    });

    $('#ichancesarg').change(function () {
        $('#ichances-valoracion').html($(this).val() + '%');
    });

});


var jForm = {
    valid: function (event) {
        if ($('[name=debut]:checked').length == 0) {
            alert("Debe responder la primera pregunta");
            $('[name=debut]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=arcampeon]:checked').length == 0) {
            alert("Debe responder la segunda pregunta");
            $('[name=arcampeon]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=maxpresencias]:checked').length == 0) {
            alert("Debe responder la tercera pregunta");
            $('[name=maxpresencias]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=maxgoles]:checked').length == 0) {
            alert("Debe responder la cuarta pregunta");
            $('[name=maxgoles]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=campeones86]:checked').length == 0) {
            alert("Debe responder la quinta pregunta");
            $('[name=campeones86]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=dtargentina]:checked').length == 0) {
            alert("Debe responder la sexta pregunta");
            $('[name=dtargentina]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=goles2014]:checked').length == 0) {
            alert("Debe responder la septima pregunta");
            $('[name=goles2014]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=rivalesarg]:checked').length == 0) {
            alert("Debe responder la octava pregunta");
            $('[name=rivalesarg]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=chancesarg]').val() == '0') {
            alert("Las chances tiene que ser al menos de 1%!");
            $('[name=chancesarg]').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=puntajesanpaoli]').val() == '1') {
            alert("Falto puntuar la actuacion de Tecnico!");
            $('[name=puntajesanpaoli]').focus();
            event.preventDefault();
            return;
        }


        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;

        if ($('[name=nacimiento]').val() >= today) {
            alert("La fecha de nacimiento no puede ser mayor o igual a la fecha actual");
            $('[name=puntajesanpaoli]').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=nacimiento]').val() < '1900-01-01') {
            alert("Sos muy viejo para esta pagina!");
            $('[name=puntajesanpaoli]').focus();
            event.preventDefault();
            return;
        }


        // como esta todo completado comienzo a poner colores de correccion
        this.correccion();
    },

    correccion: function () {
        var debutMaradona = [];
        $('[name=debut]:checked').each(function () {
            debutMaradona.push($(this).val());
        });
        if (!debutMaradona.includes("ves82")) {
            if ($('#correccionpreg1').html('') != '') { $('#correccionpreg1').html(''); }
            $('#correccionpreg1').append("Incorrecto, la respuesta correcta es España 82");
            $('#correccionpreg1').css({ color: "#bd0000" });
        } else {
            if ($('#correccionpreg1').html('') != '') { $('#correccionpreg1').html(''); }
            $('#correccionpreg1').append("Su respuesta es correcta");
            $('#correccionpreg1').css({ color: "#10b600" });
        }

        var campeon2Mundial = [];
        $('[name=arcampeon]:checked').each(function () {
            campeon2Mundial.push($(this).val());
        });
        if (!campeon2Mundial.includes("vm86")) {
            if ($('#correccionpreg2').html('') != '') { $('#correccionpreg2').html(''); }
            $('#correccionpreg2').append("Incorrecto, la respuesta correcta es Mundial 86");
            $('#correccionpreg2').css({ color: "#bd0000" });
        } else {
            if ($('#correccionpreg2').html('') != '') { $('#correccionpreg2').html(''); }
            $('#correccionpreg2').append("Su respuesta es correcta");
            $('#correccionpreg2').css({ color: "#10b600" });
        }

        var masPresencias = [];
        $('[name=maxpresencias]:checked').each(function () {
            masPresencias.push($(this).val());
        });
        if (!masPresencias.includes("vpjm")) {
            if ($('#correccionpreg3').html('') != '') { $('#correccionpreg3').html(''); }
            $('#correccionpreg3').append("Incorrecto, la respuesta correcta es Javier Mascherano");
            $('#correccionpreg3').css({ color: "#bd0000" });
        } else {
            if ($('#correccionpreg3').html('') != '') { $('#correccionpreg3').html(''); }
            $('#correccionpreg3').append("Su respuesta es correcta");
            $('#correccionpreg3').css({ color: "#10b600" });
        }

        var masGoles = [];
        $('[name=maxgoles]:checked').each(function () {
            masGoles.push($(this).val());
        });
        if (!masGoles.includes("vglm")) {
            if ($('#correccionpreg4').html('') != '') { $('#correccionpreg4').html(''); }
            $('#correccionpreg4').append("Incorrecto, la respuesta correcta es Lionel Messi");
            $('#correccionpreg4').css({ color: "#bd0000" });
        } else {
            if ($('#correccionpreg4').html('') != '') { $('#correccionpreg4').html(''); }
            $('#correccionpreg4').append("Su respuesta es correcta");
            $('#correccionpreg4').css({ color: "#10b600" });
        }


        var campeones86 = [];
        $('[name=campeones86]:checked').each(function () {
            campeones86.push($(this).val());
        });

        // if ((campeones86.includes('vccc') || campeones86.includes('vcmk')) || (!campeones86.includes('vcor') || !campeones86.includes('vcjb'))) {
        if ((!campeones86.includes('vccc') && !campeones86.includes('vcmk')) && (campeones86.includes('vcor') && campeones86.includes('vcjb'))) {
            if ($('#correccionpreg5').html('') != '') { $('#correccionpreg5').html(''); }
            $('#correccionpreg5').append("Su respuesta es correcta");
            $('#correccionpreg5').css({ color: "#10b600" });
        } else {
            if ($('#correccionpreg5').html('') != '') { $('#correccionpreg5').html(''); }
            $('#correccionpreg5').append("Incorrecto, la respuesta correcta es Jorge Burruchaga y Oscar Ruggeri");
            $('#correccionpreg5').css({ color: "#bd0000" });
        }

        var dtSeleccion = [];
        $('[name=dtargentina]:checked').each(function () {
            dtSeleccion.push($(this).val());
        });
        // if ((dtSeleccion.includes('vdtcb') || dtSeleccion.includes('vdtcl')) || (!dtSeleccion.includes('vdtab') || !dtSeleccion.includes('vdtas'))) {
        if ((!dtSeleccion.includes('vdtcb') && !dtSeleccion.includes('vdtcl')) && (dtSeleccion.includes('vdtab') && dtSeleccion.includes('vdtas'))) {
            if ($('#correccionpreg6').html('') != '') { $('#correccionpreg6').html(''); }
            $('#correccionpreg6').append("Su respuesta es correcta");
            $('#correccionpreg6').css({ color: "#10b600" });
        } else {
            if ($('#correccionpreg6').html('') != '') { $('#correccionpreg6').html(''); }
            $('#correccionpreg6').append("Incorrecto, la respuesta correcta es Alfio Basile y Alejandro Sabella");
            $('#correccionpreg6').css({ color: "#bd0000" });
        }

        var golMundial2014 = [];
        $('[name=goles2014]:checked').each(function () {
            golMundial2014.push($(this).val());
        });
        if (!golMundial2014.includes('vgolrp') && (golMundial2014.includes('vgolgh') && golMundial2014.includes('vgolmr') && golMundial2014.includes('vgoldm'))) {
            if ($('#correccionpreg7').html('') != '') { $('#correccionpreg7').html(''); }
            $('#correccionpreg7').append("Su respuesta es correcta");
            $('#correccionpreg7').css({ color: "#10b600" });
        } else {
            if ($('#correccionpreg7').html('') != '') { $('#correccionpreg7').html(''); }
            $('#correccionpreg7').append("Incorrecto, la respuesta correcta es Marcos Rojo, Angel Di Maria y Gonzalo Higuain");
            $('#correccionpreg7').css({ color: "#bd0000" });
        }

        var grupoMundial2018 = [];
        $('[name=rivalesarg]:checked').each(function () {
            grupoMundial2018.push($(this).val());
        });
        if ((!grupoMundial2018.includes('vgrupome') && !grupoMundial2018.includes('vgrupoes') && !grupoMundial2018.includes('vgruporu')) &&
            (grupoMundial2018.includes('vgrupocr') && grupoMundial2018.includes('vgrupois') && grupoMundial2018.includes('vgruponi'))) {
            if ($('#correccionpreg8').html('') != '') { $('#correccionpreg8').html(''); }
            $('#correccionpreg8').append("Su respuesta es correcta");
            $('#correccionpreg8').css({ color: "#10b600" });
        } else {
            if ($('#correccionpreg8').html('') != '') { $('#correccionpreg8').html(''); }
            $('#correccionpreg8').append("Incorrecto, la respuesta correcta es Nigeria, Islandia y Croacia");
            $('#correccionpreg8').css({ color: "#bd0000" });
        }

        if ($('#correccionpreg9').html('') != '') { $('#correccionpreg9').html(''); }
        $('#correccionpreg9').append("Muchas gracias por tu opinion!");
        $('#correccionpreg9').css({ color: "#10b600" });

        if ($('#correccionpreg10').html('') != '') { $('#correccionpreg10').html(''); }
        $('#correccionpreg10').append("Muchas gracias por tu opinion!");
        $('#correccionpreg10').css({ color: "#10b600" });

        this.deshabilitar();
    },
    deshabilitar: function () {
        $("input[name=debut]").prop('disabled',true);
        $("input[name=arcampeon]").prop('disabled',true);
        $("input[name=maxpresencias]").prop('disabled',true);
        $("input[name=maxgoles]").prop('disabled',true);
        $("input[name=campeones86]").prop('disabled',true);
        $("input[name=dtargentina]").prop('disabled',true);
        $("input[name=goles2014]").prop('disabled',true);
        $("input[name=rivalesarg]").prop('disabled',true);
        $("input[name=chancesarg]").prop('disabled',true);
        $("input[name=puntajesanpaoli]").prop('disabled',true);
        $("input[name=nombre]").prop('disabled',true);
        $("input[name=nacimiento]").prop('disabled',true);
        $("input[name=mail]").prop('disabled',true);
    }
}