



// JQuery functions
$(document).ready(function() {
  var csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
  var csrfToken = csrfTokenInput ? csrfTokenInput.value : undefined;
  /**
   * Email Form submit Function (index page)
   * How to use: Compare wukschweiss project
   */
  $('#emailForm').submit(function (event) {
    event.preventDefault(); // Prevent the default form submission
    $('#bSendMail').prop('disabled', true);
    console.log("Sende email...")
    // Send form data to the server using AJAX
    setTimeout(() => {
      $.ajax({
        type: 'POST',
        url: '/cms/email/request/',
        data: $("#emailForm").serialize(),
        success: function (response) {
          // Handle successful response here
          if (response.success) {
            sendNotif("Ihre Nachricht wurde erfolgreich gesendet", "success")
          }
          $('#emailForm')[0].reset();
        },
        error: function (error) {
          // Handle error response here
          console.error('Form submission failed');
          sendNotif("Etwas ist schief gelaufen. Versuchen Sie es bitte später nochmal.", "error")
        },
        complete: function() {
            // Wird ausgeführt, egal ob Erfolg oder Fehler
            $('#bSendMail').prop('disabled', false); // Button wieder aktivieren
        }
      });
    }, 500)
    
  });

/*setTimeout(() => {
  if (cookiemapselect !== null && cookiemapselect !== "false") {
    let map = L.map("map");
    map.on("focus", function () {
      map.scrollWheelZoom.enable();
    });
    map.on("blur", function () {
      map.scrollWheelZoom.disable();
    });
  }
  
}, 500);*/

mapLoad();

});



function mapLoad() {
  if (cookiemapselect === null || cookiemapselect === "false") {
    $('#covermap').removeClass('hidden');
    $('#map').addClass('hidden');
  } else {
    $('#covermap').addClass('hidden');
    $('#map').removeClass('hidden');

    // Load the iframe into the #map div
    $('#map').removeClass('hidden').html(`
      <iframe class="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBAM2o7PiQqwk15LC1XRH2e_KJ-jUa7KYk&zoom=14&maptype=roadmap&q=Dr. med. dent. Lorenz Holmer"
              allowfullscreen></iframe>
    `);
  }
}

