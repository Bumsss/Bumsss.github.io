function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 55;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1000);

var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
