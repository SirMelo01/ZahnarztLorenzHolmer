

var csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
var csrfToken = csrfTokenInput ? csrfTokenInput.value : undefined;

// JQuery functions
$(document).ready(function() {
  /**
   * Email Form submit Function (index page)
   * How to use: Compare wukschweiss project
   */
  $('#emailForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission
    var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        title: $('#subject').val(),
        message: $('#message').val(),
        csrfmiddlewaretoken: csrftoken,
    };
    // Send form data to the server using AJAX
    $.ajax({
        type: 'POST',
        url: '/cms/email/request/',
        data: formData,
        success: function(response) {
            // Handle successful response here
            if(response.success) {
              sendNotif("Ihre Nachricht wurde erfolgreich gesendet", "success")
            }
            $('#emailForm')[0].reset();
        },
        error: function(xhr, status, error) {
            // Handle error response here
            sendNotif("Etwas ist schief gelaufen. Versuchen Sie es bitte später nochmal.", "error")
        }
    });
});
});

// Commented because this website has no map
/*setTimeout(() => {
  if (cookiemapselect !== null && cookiemapselect !== "false") {
    map = L.map("map");
    map.on("focus", function () {
      map.scrollWheelZoom.enable();
    });
    map.on("blur", function () {
      map.scrollWheelZoom.disable();
    });
  }
  mapLoad();
}, 500);*/

