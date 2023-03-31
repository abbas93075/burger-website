const scroller_area = document.getElementById("scroller-area");
scroller_area.scrollIntoView(true);
const scroller_controls = document.getElementsByClassName("scroller-control");
const left_button = scroller_controls[0];
const right_button = scroller_controls[1];
const items = document.getElementsByClassName("scroller-item");
const full_space = scroller_area.scrollWidth - scroller_area.clientWidth;
let space_left = full_space;
console.log(space_left);
const showing_all = scroller_area.scrollWidth === scroller_area.clientWidth;

console.log(scroller_area.scrollWidth + " | " + scroller_area.clientWidth);

if (showing_all) {
  left_button.style.display = "none";
  right_button.style.display = "none";
  Array.from(items).forEach((item) => {
    item.style.marginRight = 0;
  });
  scroller_area.style.justifyContent = "space-between";
}

function scrollRight() {
  // console.log("----" + space_left);
  // if (space_left > 0) {
  scroller_area.scrollBy({
    left: 190,
    top: 0,
    behavior: "smooth",
  });
  // space_left = space_left - 190;
  // }
}

function scrollLeft() {
  // console.log(space_left + " - " + full_space);
  // if (space_left <= full_space) {
  scroller_area.scrollBy({
    left: -190,
    top: 0,
    behavior: "smooth",
  });
  // space_left = space_left + 190;
  // }
}

left_button.addEventListener("click", scrollLeft);
right_button.addEventListener("click", scrollRight);
