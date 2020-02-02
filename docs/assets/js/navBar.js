document.getElementById("following").setAttribute("onclick","window.location.href = 'main_page.html';");

document.getElementById("search_purposes").setAttribute("onclick","window.location.href = 'explore.html';");

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}