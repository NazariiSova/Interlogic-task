
function handlerShowMenu() {
  const hamburger = document.getElementById("header-menu-hamburger");
  hamburger.classList.add("show-menu")
  hamburger.classList.remove("hide-menu");
console.log(hamburger);
}

function handlerHideMenu() {
  const hamburger = document.getElementById("header-menu-hamburger");
  hamburger.classList.remove("show-menu");
  hamburger.classList.add("hide-menu");
  setTimeout(() => {
    hamburger.classList.remove("hide-menu")
  }, 100)
}