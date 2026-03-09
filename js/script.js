// Setting up elements and adding event listeners
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

// Basket icon changes to filled version on hovering
function filledIcon() {
  basketIcon.src = "/img/icons/basket-filled.svg";
}
function outlineIcon() {
  basketIcon.src = "/img/icons/basket-outline.svg";
}

// If the menu icon is hamburger menu (the overlay is closed), it is changed to the close icon,
// the main content of the page is hidden, the overlay is opened; and if the icon is the close icon,
// the main content is shown again, overlay gets closed
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

// Styling for the overlay menu when displayed
function menuOverlayStyling() {
  menuOverlay.style.display = "flex";
  menuOverlay.style.flexDirection = "column";
  menuOverlay.style.alignItems = "center";
}
