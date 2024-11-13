window.onload = function () {
  setTimeout(() => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Fade-Out Effekt
    welcomeScreen.style.opacity = '0';

    // Hauptinhalt anzeigen nach dem Fade-Out
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, 1300); // Zeit für den Fade-Out (2.5 Sekunden)
  }, 1200); // Wartezeit, bevor der Fade-Out beginnt (0.5 Sekunden)
};

const cookie = document.querySelector("#menu-cookie");
const menu = document.querySelector("#navbar-cta");

function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function cookieRefresh() {
  if (cookieselect == null) {
    cookie.classList.add("block");
    cookie.classList.remove("hidden");
  } else {
    cookie.classList.add("hidden");
  }
}


function acceptCookie() {
  document.cookie =
    "Cookie-Consent=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Map=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Font=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  location.reload();
  cookieRefresh();
}

function refuseCookie() {
  document.cookie =
    "Cookie-Consent=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Map=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Font=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  location.reload();
  cookieRefresh();
}

cookieRefresh();


$(document).ready(function () {
  const navbar = $('#top-info-bar')
  let prevScrollPos = 0;

  function updateNavbarState() {
    // Get the new Value
    const currentScrollPos = window.pageYOffset;

    if ((document.documentElement.scrollTop || document.body.scrollTop) === 0) {
      // User has scrolled up to the top of the page
      navbar.removeClass('scrolled');
    } else {
      navbar.addClass('scrolled');
    }

    // Update the old value
    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', updateNavbarState);


  // Funktion zur Berechnung der Bannerhöhe und Zuweisung an die CSS-Variable
  function setInfoBannerHeight() {
    var bannerHeight = $('#info-banner').outerHeight() || 0;
    $(':root').css('--info-banner-height', bannerHeight + 'px');
  }

  // Initiale Einstellung der Bannerhöhe
  setInfoBannerHeight();

  // Neu berechnen, falls Fenstergröße oder Inhalt sich ändert
  $(window).on('resize', setInfoBannerHeight);



  // Funktion, um das Menü zu öffnen und den Banner auszublenden
  function openMenu() {
    $('#mobile-menu').removeClass('hidden');
    $('#info-banner').addClass('hidden');
  }

  // Funktion, um das Menü zu schließen und den Banner wieder einzublenden
  function closeMenu() {
    $('#mobile-menu').addClass('hidden');
    $('#info-banner').removeClass('hidden');
  }

  // Burger-Button Klick-Event
  $('#menu-toggle').on('click', function () {
    if ($('#mobile-menu').hasClass('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Schließen-Button im mobilen Menü
  $('#menu-toggle2').on('click', function () {
    closeMenu();
  });

  // Banner anzeigen, wenn der Bildschirm auf Desktop-Größe erweitert wird
  $(window).on('resize', function () {
    if ($(window).width() >= 768) { // 768px ist die Grenze für 'md'
      $('#info-banner').removeClass('hidden');
      $('#mobile-menu').addClass('hidden');
    }
  });



  $('.faq-question').click(function () {
    // FAQ-Answer öffnen/schließen
    $(this).next('.faq-answer').slideToggle();

    // Toggle-Symbol ändern (+ / -)
    var toggleSymbol = $(this).find('.faq-toggle');
    toggleSymbol.text(toggleSymbol.text() === '+' ? '-' : '+');

    // Alle anderen Antworten schließen
    $('.faq-answer').not($(this).next('.faq-answer')).slideUp();
    $('.faq-toggle').not(toggleSymbol).text('+');
  });


  // Swiper Slider
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true, // Aktiviert das endlose Swipen
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Autoplay nach Benutzung der Buttons nicht deaktivieren
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true, // Bullets anklickbar machen
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
});
