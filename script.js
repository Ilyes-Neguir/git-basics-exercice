const header = document.querySelector("#site-header");
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");
const startButton = document.querySelector("#start-button");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
});

startButton.addEventListener("click", () => {
  startButton.textContent = "You’re on your way!";
  startButton.setAttribute("aria-label", "Getting started");
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();