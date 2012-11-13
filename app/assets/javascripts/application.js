//= require jquery
//= require jquery_ujs


$(document).ready(function() {
    if ("ontouchstart" in document.documentElement) {
        document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
    }
    impress().init();
});