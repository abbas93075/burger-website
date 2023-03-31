const mobile_alist = document.getElementById("navbar-mobile");
const navbar = document.getElementById("navbar");
const x_btn = document.getElementById("close-btn");
let burger_menu_pressed = false;

function showMobileNav() {
  const logo = document.getElementById("burger-menu-icon");
  navbar.classList.toggle("hidden");
  x_btn.classList.toggle("hidden");
  mobile_alist.classList.toggle("removed");
  logo.classList.toggle("site-icon");
  burger_menu_pressed = !burger_menu_pressed;
  if (burger_menu_pressed) {
    logo.src = "images/x-icon.png";
    console.log("x-icon");
  } else {
    logo.src = "images/burger-menu.png";
    console.log("butger-icon");
  }
}
