let basketItems = JSON.parse(localStorage.basketItems);
const cartItemGrid = document.querySelector(".cart-items");
const productTitles = [
  "Hope",
  "Embrace the chaos",
  "Calm before the storm",
  "Fairy Forest",
  "Chosen home",
  "Path of life",
  "Little joys of life",
  "Take-off",
  "Light of life",
  "My friend and I - her side",
  "See you later",
  "My friend and I - my side",
];

for (let i = 0; i < basketItems.length; i++) {
  createCard(basketItems[i], i);
  let quantityButtons = document.querySelectorAll(".quantity-button");
  for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", changeQuantity);
    quantityButtons[i].addEventListener("click", idUpdate);
  }
}

function createCard(newItem, i) {
  let propertyList = {};
  // The following lines of code are adapted from a YouTube video on this link: https://www.youtube.com/watch?v=zikLN9XHy4I
  const newItemCard = document.createElement("section");
  newItemCard.classList.add("cart-item-card");
  const newItemImg = document.createElement("img");
  newItemImg.classList.add("item-img");
  const newItemDetails = document.createElement("ul");
  const newItemName = document.createElement("li");
  newItemName.classList.add("item-name");
  const newItemPrice = document.createElement("li");
  newItemPrice.innerText = "20.00 kr";
  const newQuantityButtons = document.createElement("section");
  newQuantityButtons.classList.add("quantity-buttons-cart");
  const newMinusButton = document.createElement("img");
  newMinusButton.src = "img/icons/minus-icon.svg";
  newMinusButton.classList.add("quantity-button", "minus-button");
  newMinusButton.alt = "Minus Button";
  const newProductQuantity = document.createElement("p");
  newProductQuantity.innerText = newItem.quantity;
  newProductQuantity.classList.add("product-quantity-number");
  const newPlusButton = document.createElement("img");
  newPlusButton.src = "img/icons/plus-icon.svg";
  newPlusButton.classList.add("quantity-button", "plus-button");
  newPlusButton.alt = "Plus button";
  const newItemTotalPrice = document.createElement("p");
  newItemTotalPrice.innerText = "Total price";
  //   End of adapted lines of code

  newProductQuantity.value = newItem.quantity;
  newProductQuantity.innerText = newProductQuantity.value;

  newItemImg.src = newItem.img;
  newItemName.innerText = productTitles[newItem.id - 1];

  propertyList.id = i;
  propertyList.quantity = 1;
  newItemCard.dataset.id = propertyList.id;
  newItemCard.dataset.quantity = propertyList.quantity;

  // The following lines of code are adapted from a YouTube video on this link: https://www.youtube.com/watch?v=zikLN9XHy4I

  newItemCard.appendChild(newItemImg);
  newItemCard.appendChild(newItemDetails);
  newItemCard.appendChild(newQuantityButtons);
  newItemCard.appendChild(newItemTotalPrice);

  newItemDetails.appendChild(newItemName);
  newItemDetails.appendChild(newItemPrice);

  newQuantityButtons.appendChild(newMinusButton);
  newQuantityButtons.appendChild(newProductQuantity);
  newQuantityButtons.appendChild(newPlusButton);
  //   End of adapted lines of code

  cartItemGrid.appendChild(newItemCard);
}

function idUpdate() {
  let cards = document.querySelectorAll(".cart-item-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].dataset.id = i;
  }
}

function changeQuantity() {
  let card = this.closest(".cart-item-card");
  let cardQuantity = card.dataset.quantity;
  if (this.classList.contains("plus-button")) {
    cardQuantity++;
  } else if (this.classList.contains("minus-button")) {
    cardQuantity--;
  }
  let cardID = card.dataset.id;

  let productQuantity = card.querySelector(".product-quantity-number");
  if (cardQuantity === 0) {
    cartItemGrid.removeChild(card);
  } else {
    productQuantity.value = cardQuantity;
    productQuantity.innerText = productQuantity.value;
    card.dataset.quantity = cardQuantity;
  }
  if (cardQuantity === 0) {
    basketItems.splice(cardID, 1);
  } else {
    basketItems[cardID].quantity = cardQuantity;
  }
  localStorage.basketItems = JSON.stringify(basketItems);
}

// let quantityButtonsContainers = document.querySelectorAll(
//   ".quantity-buttons-cart",
// );
// for (let i = 0; i < quantityButtonsContainers.length; i++) {
//   quantityButtonsContainers[i]
//     .querySelector(".quantity-button")
//     .addEventListener("click", changeQuantity());

//   function changeQuantity() {
//     const productQuantity = document.querySelector(".product-quantity-number");
//     const minusButton = document.querySelector("minus-button");
//     let quantity = productQuantity.textContent;

//     if (event.target.class === "minus-button" && quantity > 1) {
//       quantity--;
//       if (quantity === 1) {
//         minusButton.style.opacity = "0%";
//       }
//     } else if (event.target.class === "plus-button") {
//       quantity++;
//       minusButton.style.opacity = "100%";
//     }

//     productQuantity.textContent = quantity;

//     newItemCard(i, basketItems[i]);
//     addToLocalStorage(i, basketItems[i]);
//   }
// }

// function addToLocalStorage(i, newItem) {
//   basketItems.splice(i, 1, newItem);
//   localStorage.basketItems = JSON.stringify(basketItems);
// }

/* Parent-child structure for item card in cart:
<section class="cart-item-card">
    <img class="item-img" src="" alt="Cart item">
    <ul>
        <li class="item-name">Product name</li>
        <li>20.00 kr</li>
    </ul>
    <section class="quantity-buttons-cart">
        <img src="img/icons/minus-icon.svg" alt="Minus button">
        <input type="number" name="product-quantity" id="product-quantity">
        <img src="img/icons/plus-icon.svg" alt="Plus button">
    </section>
    <p>Total price</p>
</section>*/
