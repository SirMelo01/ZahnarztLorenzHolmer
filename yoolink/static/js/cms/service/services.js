$(document).ready(function() {
    // Event Listener für den Switch
    $('#comparisionSwitch').on('change', function() {
        if ($(this).is(':checked')) {
            // Schaltet den Vergleichsmodus ein
            $('#sliderImageSection').show();
            $('#singleImageSection').hide();

            // Entfernt content-image von den Vergleichsbildern und fügt es dem Einzelbild hinzu
            $('#sliderImageSection img').addClass('content-image');
            $('#singleImageSection img').removeClass('content-image');
        } else {
            // Schaltet auf das Einzelbild um
            $('#sliderImageSection').hide();
            $('#singleImageSection').show();

            // Entfernt content-image vom Einzelbild und fügt es den Vergleichsbildern hinzu
            $('#singleImageSection img').addClass('content-image');
            $('#sliderImageSection img').removeClass('content-image');
        }
    });

    // Initiale Ansicht basierend auf dem Schalterstatus
    if ($('#comparisionSwitch').is(':checked')) {
        $('#sliderImageSection').show();
        $('#singleImageSection').hide();
        $('#sliderImageSection img').addClass('content-image');
        $('#singleImageSection img').removeClass('content-image');
    } else {
        $('#sliderImageSection').hide();
        $('#singleImageSection').show();
        $('#singleImageSection img').addClass('content-image');
        $('#sliderImageSection img').removeClass('content-image');
    }
});
