const projectMenuToggle = document.querySelector(".menu-toggle");
const projectNavLinks = document.querySelectorAll(".site-nav a");

projectMenuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  projectMenuToggle.setAttribute("aria-expanded", String(isOpen));
});

projectNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    projectMenuToggle?.setAttribute("aria-expanded", "false");
  });
});
