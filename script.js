let menuBtn = document.getElementById("menubtn");
let sideNav = document.getElementsByClassName("navBar-bg")[0];

// sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0px";
    menuBtn.src = "assets/close.png";
  } else {
    sideNav.style.right = "-250px";
    menuBtn.src = "assets/menu.png";
  }
};

let cursor1 = document.querySelector("#cursor1");
let cursor2 = document.querySelector("#cursor2");

document.addEventListener("mousemove", function (e) {
  cursor1.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
