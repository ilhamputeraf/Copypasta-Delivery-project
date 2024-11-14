document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("close-btn");
  const menuItems = document.querySelectorAll("#mobile-menu a");

  if (hamburger && mobileMenu && closeButton) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeButton.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const gallerySection = document.getElementById("gallery");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
    themeToggle.checked = currentTheme === "dark";

    if (currentTheme === "dark") {
      gallerySection.style.backgroundImage =
        "url('Assets/Screenshot from 2024-11-14 14-29-57.png')";
    } else {
      gallerySection.style.backgroundImage =
        "url('Assets/Screenshot from 2024-11-09 00-34-42.png')";
    }
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      gallerySection.style.backgroundImage =
        "url('Assets/Screenshot from 2024-11-14 14-29-57.png')";
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      gallerySection.style.backgroundImage =
        "url('Assets/Screenshot from 2024-11-09 00-34-42.png')";
    }
  });});