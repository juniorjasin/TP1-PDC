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
        console.log("valid function");
        if ($('[name=debut]:checked').length == 0){
            alert("Debe responder la primera pregunta");
            $('[name=debut]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=arcampeon]:checked').length == 0){
            alert("Debe responder la segunda pregunta");
            $('[name=arcampeon]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=maxpresencias]:checked').length == 0){
            alert("Debe responder la tercera pregunta");
            $('[name=maxpresencias]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=maxgoles]:checked').length == 0){
            alert("Debe responder la cuarta pregunta");
            $('[name=maxgoles]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=campeones86]:checked').length == 0){
            alert("Debe responder la quinta pregunta");
            $('[name=campeones86]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=dtargentina]:checked').length == 0){
            alert("Debe responder la sexta pregunta");
            $('[name=dtargentina]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=goles2014]:checked').length == 0){
            alert("Debe responder la septima pregunta");
            $('[name=goles2014]:first').focus();
            event.preventDefault();
            return;
        }

        if ($('[name=rivalesarg]:checked').length == 0){
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

    }
}


