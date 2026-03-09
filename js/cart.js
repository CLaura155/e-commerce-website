// Setting up elements and objects
let basketItems = [];
if (localStorage.basketItems) {
  basketItems = JSON.parse(localStorage.basketItems);
}
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

// Checking if the empty cart message needs to be displayed
emptyCartMessage();

let cartTotalPrices = {
  productTotal: 0,
  deliveryTotal: 0,
  fullTotal: 0,
};

// Updating the prices based on cart items
cartPrices();

// Calling functions
for (let i = 0; i < basketItems.length; i++) {
  createCard(basketItems[i], i);
  cartPrices();
  let quantityButtons = document.querySelectorAll(".quantity-button");
  for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", changeQuantity);
    quantityButtons[i].addEventListener("click", idUpdate);
  }
}

// Function to determine if empty card message needs to be displayed
function emptyCartMessage() {
  if (basketItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.innerHTML = `Your shopping cart is empty. <a id="inline-link" href="products.html">Discover our products`;
    cartItemGrid.appendChild(emptyMessage);
  }
}

// Function to create cards for items in cart
function createCard(newItem, i) {
  let propertyList = {};
  //   The following lines of code are adapted from a YouTube video on the following link:
  //   https://www.youtube.com/watch?v=zikLN9XHy4I accessed on 03.03.2026.

  // Creating the elements needed for the item card
  const newItemCard = document.createElement("section");
  newItemCard.classList.add("cart-item-card");
  const newItemImg = document.createElement("img");
  newItemImg.classList.add("item-img");
  const newItemTexts = document.createElement("section");
  newItemTexts.classList.add("item-texts");
  const newItemDetails = document.createElement("ul");
  const newItemName = document.createElement("li");
  newItemName.classList.add("item-name");
  const newItemPrice = document.createElement("li");
  newItemPrice.classList.add("item-price");
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
  newItemTotalPrice.id = "total-price-text";
  //   End of adapted lines of code

  // Setting the values to match the product/item and its details (price, quantity)
  newProductQuantity.value = newItem.quantity;
  newProductQuantity.innerText = newProductQuantity.value;

  newItemImg.src = newItem.img;
  newItemName.innerText = productTitles[newItem.id - 1];

  propertyList.id = i;
  propertyList.quantity = newItem.quantity;
  propertyList.price = 20;
  propertyList.totalPrice = propertyList.quantity * propertyList.price;
  newItemCard.dataset.id = propertyList.id;
  newItemCard.dataset.quantity = propertyList.quantity;
  newItemCard.dataset.price = propertyList.price;
  newItemCard.dataset.totalPrice = propertyList.totalPrice;

  newItemTotalPrice.innerText = propertyList.totalPrice + ".00 kr";
  newItemTotalPrice.value = propertyList.totalPrice;

  //   The following lines of code are adapted from a YouTube video on the following link:
  //   https://www.youtube.com/watch?v=zikLN9XHy4I accessed on 03.03.2026.

  // Adding the elements to the main container newItemCard
  newItemCard.appendChild(newItemImg);
  newItemCard.appendChild(newItemTexts);

  newItemTexts.appendChild(newItemDetails);
  newItemTexts.appendChild(newQuantityButtons);
  newItemTexts.appendChild(newItemTotalPrice);

  newItemDetails.appendChild(newItemName);
  newItemDetails.appendChild(newItemPrice);

  newQuantityButtons.appendChild(newMinusButton);
  newQuantityButtons.appendChild(newProductQuantity);
  newQuantityButtons.appendChild(newPlusButton);
  //   End of adapted lines of code

  // Adding the item card to the grid
  cartItemGrid.appendChild(newItemCard);
}

// Updating the id of the card based on its position in the grid
// (its needed in case an item upper in the list gets deleted)
function idUpdate() {
  let cards = document.querySelectorAll(".cart-item-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].dataset.id = i;
  }
}

//   The next lines of code are inspired by/adapted from ChatGPT from the following link:
//   https://chatgpt.com/s/t_69a8739aa7208191853470f52bc66fb3 accessed on 04.03.2026.:

// Changing the quantities of the items using the plus and minus buttons
function changeQuantity() {
  let card = this.closest(".cart-item-card");
  let cardQuantity = card.dataset.quantity;
  let cardTotalPrice = card.dataset.totalPrice;
  let totalPriceText = card.querySelector("#total-price-text");
  if (this.classList.contains("plus-button")) {
    cardQuantity++;
  } else if (this.classList.contains("minus-button")) {
    cardQuantity--;
  }
  let cardID = card.dataset.id;
  cardTotalPrice = card.dataset.price * cardQuantity;

  let productQuantity = card.querySelector(".product-quantity-number");
  // Removing deleted items or updating quantities and item prices
  if (cardQuantity === 0) {
    cartItemGrid.removeChild(card);
    cartPrices();
  } else {
    productQuantity.value = cardQuantity;
    productQuantity.innerText = productQuantity.value;
    card.dataset.quantity = cardQuantity;
    card.dataset.totalPrice = cardTotalPrice;
    totalPriceText.innerText = card.dataset.totalPrice + ".00 kr";
  }
  //   End of inspired/adapted lines of code
  if (cardQuantity === 0) {
    basketItems.splice(cardID, 1);
  } else {
    basketItems[cardID].quantity = cardQuantity;
  }
  // Saving changes to localStorage
  localStorage.basketItems = JSON.stringify(basketItems);
  emptyCartMessage();
  cartPrices();
}

// Updating cart total prices
function cartPrices() {
  const productTotalText = document.querySelector("#products-total");
  const deliveryTotalText = document.querySelector("#delivery-total");
  const fullTotalText = document.querySelector("#full-total");
  if (basketItems.length != 0) {
    let itemPrices = document.querySelectorAll(".cart-item-card");
    cartTotalPrices.productTotal = 0;
    for (let i = 0; i < itemPrices.length; i++) {
      cartTotalPrices.productTotal += Number(itemPrices[i].dataset.totalPrice);
    }
    if (cartTotalPrices.productTotal != 0) {
      cartTotalPrices.deliveryTotal = 15;
    } else {
      cartTotalPrices.deliveryTotal = 0;
    }
    cartTotalPrices.fullTotal =
      Number(cartTotalPrices.productTotal) +
      Number(cartTotalPrices.deliveryTotal);

    productTotalText.innerText = cartTotalPrices.productTotal + ".00 kr";
    deliveryTotalText.innerText = cartTotalPrices.deliveryTotal + ".00 kr";
    fullTotalText.innerText = cartTotalPrices.fullTotal + ".00 kr";
  } else {
    productTotalText.innerText = cartTotalPrices.productTotal + ".00 kr";
    deliveryTotalText.innerText = cartTotalPrices.deliveryTotal + ".00 kr";
    fullTotalText.innerText = cartTotalPrices.fullTotal + ".00 kr";
  }
}

/* Parent-child structure for item card in cart:
<section class="cart-item-card">
  <img class="item-img" src="" alt="Cart item">
  <section class="item-texts">
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
  </section>
</section>*/
