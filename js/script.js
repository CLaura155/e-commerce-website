let menuIcon = {};
let mainPageContent = document.querySelector("main");
let menuOverlay = document.querySelector("menu");

if (document.querySelector("#hamburger-menu-icon")) {
  menuIcon.element = document.querySelector("#hamburger-menu-icon");
  menuIcon.type = "hamburger-menu";
  console.log("Menu icon exists");
  console.log(menuIcon.type);
}

menuIcon.element.addEventListener("click", openCloseMenu);

function openCloseMenu() {
  if (menuIcon.type === "hamburger-menu") {
    menuIcon.type = "close-icon";
    menuIcon.element.src = "/img/icons/close-icon.svg";
    console.log("icon changed to X");
    mainPageContent.style.display = "none";
    menuOverlayStyling();
  } else {
    menuIcon.type = "hamburger-menu";
    menuIcon.element.src = "/img/icons/hamburger-menu-icon.svg";
    console.log("icon changed to Hambi");
    mainPageContent.style.display = "block";
    menuOverlay.style.display = "none";
  }
}

function menuOverlayStyling() {
  menuOverlay.style.display = "flex";
  menuOverlay.style.flexDirection = "column";
  menuOverlay.style.alignItems = "center";
}
