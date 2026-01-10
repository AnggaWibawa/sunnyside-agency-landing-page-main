const navMenu = document.getElementById("nav-menu");
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", () => {
  navMenu.classList.toggle("opacity-100");
  navMenu.classList.toggle("pointer-events-auto");
});
