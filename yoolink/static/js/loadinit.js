var font1 = document.createElement("link");
font1.rel = "preconnect";
font1.href = "https://fonts.googleapis.com";

var font2 = document.createElement("link");
font2.rel = "preconnect";
font2.href = "https://fonts.gstatic.com";
font2.crossOrigin = "";

var font3 = document.createElement("link");
font3.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
font3.rel = "stylesheet";


var cookieselect = getCookie("Cookie-Consent");
var cookiefontselect = getCookie("Cookie-Font");
var cookiemapselect = getCookie("Cookie-Map");
var cookiestart = getCookie("Start-Cookie");

if(cookiemapselect === "true"){
  //Bei Google passiert hier nichts
}
if(cookiefontselect === "true"){
  document.head.appendChild(font1);
  document.head.appendChild(font2);
  document.head.appendChild(font3);
}

//if (document.cookie.includes("Cookie-Consent=")) {

//}

//if (!document.cookie.includes("Start-Cookie=true")) {
  document.getElementById("welcome-screen-cookie").style.display = "block";
//}  




//Cookies raussuchen per Name
function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
