const hamburger = document.getElementById("hamburger");
const sideNavbar = document.getElementById("mobile-navbar");
const backdrop = document.getElementById("backdrop");

hamburger.addEventListener("click", () => {
  sideNavbar.classList.add("show");
  backdrop.classList.add("show");
  document.body.classList.add("no-scroll");
});

backdrop.addEventListener("click", () => {
  sideNavbar.classList.remove("show");
  backdrop.classList.remove("show");
  document.body.classList.remove("no-scroll");
});
