const menuButton : HTMLElement = document.querySelector(".header__hamburger") as HTMLElement;
const menuList : HTMLElement = document.querySelector(".header__menu-ul") as HTMLElement;


menuButton.addEventListener('click', toggleMenu)

function toggleMenu () {
  if (menuButton.getAttribute("aria-expanded") == "false") {
    menuList.style.display = "flex";
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuList.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
  }
};