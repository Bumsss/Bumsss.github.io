setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 0000);

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
