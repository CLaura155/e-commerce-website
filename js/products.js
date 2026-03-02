const imgElementsArray = document.getElementsByClassName("artwork-img");
const cardBoxesArray = document.getElementsByClassName("title-card");
const cardTitlesArray = document.getElementsByClassName("title-card-text");

for (i = 0; i < imgElementsArray.length; i++) {
  let imgElement = imgElementsArray[i];
  let titleCardBox = cardBoxesArray[i];
  let titleCardText = cardTitlesArray[i];
  imgElement.addEventListener("mouseover", showTitle);

  function showTitle() {
    titleCardBox.style.display = "block";
    titleCardText.style.display = "block";

    imgElement.addEventListener("mouseout", disappearTitle);
    function disappearTitle() {
      titleCardBox.style.display = "none";
      titleCardText.style.display = "none";
    }
  }
}

let basketIcons = document.getElementsByClassName("basket-outline");
let basketArr;

if (localStorage.basketItems) {
  basketArr = JSON.parse(localStorage.basketItems);
} else {
  basketArr = [];
}

for (let i = 0; i < basketIcons.length; i++) {
  for (let j = 0; j < basketArr.length; j++) {
    if (basketIcons[i].dataset.id === basketArr[j].id) {
      if (basketIcons[i].src.includes("gray")) {
        basketIcons[i].src = "img/icons/basket-gray-filled.svg";
      } else {
        basketIcons[i].src = "img/icons/basket-filled.svg";
      }
    }
  }
}

for (let i = 0; i < basketIcons.length; i++) {
  basketIcons[i].addEventListener("click", saveToBasket);
}

function saveToBasket() {
  let basketItem = {
    id: this.dataset.id,
    img: this.dataset.img,
  };

  for (let i = 0; i < basketArr.length; i++) {
    if (this.dataset.id === basketArr[i].id) {
      basketArr.splice(i, 1);
    }
  }

  if (this.src.includes("outline")) {
    if (this.src.includes("gray")) {
      this.src = "img/icons/basket-gray-filled.svg";
    } else {
      this.src = "img/icons/basket-filled.svg";
    }
    basketArr.push(basketItem);
  } else {
    if (this.src.includes("gray")) {
      this.src = "img/icons/basket-gray-outline.svg";
    } else {
      this.src = "img/icons/basket-outline.svg";
    }
  }

  localStorage.basketItems = JSON.stringify(basketArr);
}
