setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 3050);

window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const menus = document.querySelector("#menus");

  hamburger.addEventListener("click", () => {
    if (menus.className.includes("show")) {
      menus.classList.remove("show");
    } else {
      menus.classList.add("show");
    }
  });
});

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
