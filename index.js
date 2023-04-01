const footer_dropdowns = document.getElementsByClassName("footer-dropdown");
const dropdown_menus = document.getElementsByClassName("footer-sub-links");

function dropDown(menu_index) {
  dropdown_menus[menu_index].classList.toggle("removed");
}

footer_dropdowns[0].addEventListener("click", () => {
  dropDown(0);
});

footer_dropdowns[1].addEventListener("click", () => {
  dropDown(1);
});
