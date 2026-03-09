let menuIcon = {};
let mainPageContent = document.querySelector("main");
let menuOverlay = document.querySelector("menu");
let basketIcon = document.querySelector(".basket-icon");

if (document.querySelector("#hamburger-menu-icon")) {
  menuIcon.element = document.querySelector("#hamburger-menu-icon");
  menuIcon.type = "hamburger-menu";
}

menuIcon.element.addEventListener("click", openCloseMenu);
basketIcon.addEventListener("mouseenter", filledIcon);
basketIcon.addEventListener("mouseleave", outlineIcon);

function filledIcon() {
  basketIcon.src = "/img/icons/basket-filled.svg";
}
function outlineIcon() {
  basketIcon.src = "/img/icons/basket-outline.svg";
}

function openCloseMenu() {
  if (menuIcon.type === "hamburger-menu") {
    menuIcon.type = "close-icon";
    menuIcon.element.src = "/img/icons/close-icon.svg";
    mainPageContent.style.display = "none";
    menuOverlayStyling();
  } else {
    menuIcon.type = "hamburger-menu";
    menuIcon.element.src = "/img/icons/hamburger-menu-icon.svg";
    mainPageContent.style.display = "block";
    menuOverlay.style.display = "none";
  }
}

function menuOverlayStyling() {
  menuOverlay.style.display = "flex";
  menuOverlay.style.flexDirection = "column";
  menuOverlay.style.alignItems = "center";
}
