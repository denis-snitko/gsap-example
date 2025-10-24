export function burgerMenu() {
  const burger = document.querySelector(".header-burger");
  const burgerClose = document.querySelector(".burger-close");
  const overlay = document.querySelector(".mobile-nav__overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

  function setBurgerAria() {
    if (document.body.classList.contains("open")) {
      burger && burger.setAttribute("aria-label", "Закрыть меню");
    } else {
      burger && burger.setAttribute("aria-label", "Меню");
    }
  }

  function openMenu(e: Event) {
    document.body.classList.add("open");
    setBurgerAria();
    e && e.preventDefault();
  }

  function closeMenu(e: Event) {
    document.body.classList.remove("open");
    setBurgerAria();

    if (e.target && (e.target as HTMLElement).tagName !== "A") {
      e.preventDefault();
    }
  }

  burger &&
    burger.addEventListener("click", function (e) {
      if (document.body.classList.contains("open")) {
        closeMenu(e);
      } else {
        openMenu(e);
      }
    });
  burgerClose && burgerClose.addEventListener("click", closeMenu);
  overlay && overlay.addEventListener("click", closeMenu);
  mobileNavLinks.forEach((link) => link.addEventListener("click", closeMenu));

  // Инициализация для aria-label
  setBurgerAria();
}
