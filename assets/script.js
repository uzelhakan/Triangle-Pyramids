(function ($) {

  var originalWidth;

  $(".triani").mouseover(function() {
    originalWidth = $(this).css("width");
    var newWidth = parseInt(originalWidth) + 10;
    $(this).css("width", newWidth + "px");
  });

  $(".triani").mouseout(function() {
    $(this).css("width", originalWidth);
  });

})(jQuery);

// BodyPage Tabs Box
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("--bodyTab--box");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabActive", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " tabActive";

}
document.getElementById("bodyTab-active").click(); //İlk açılışta aktif olacak tab

// Background Color Change
document.getElementById("changeColorButton").addEventListener("click", function() {
  var color = document.getElementById("colorPicker").value;
  document.documentElement.style.setProperty('--Bg-color', color);
});
