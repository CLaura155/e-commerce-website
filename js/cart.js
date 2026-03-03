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
  newItemCard(i, basketItems[i]);
}

function newItemCard(i, newItem) {
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
  newMinusButton.alt = "Minus Button";
  const newProductQuantity = document.createElement("input");
  newProductQuantity.type = "number";
  newProductQuantity.name = "product-quantity";
  newProductQuantity.classList.add("product-quantity");
  newProductQuantity.id = i;
  const newPlusButton = document.createElement("img");
  newPlusButton.src = "img/icons/plus-icon.svg";
  newPlusButton.alt = "Plus button";
  const newItemTotalPrice = document.createElement("p");
  newItemTotalPrice.innerText = "Total price";

  newItemCard.appendChild(newItemImg);
  newItemCard.appendChild(newItemDetails);
  newItemCard.appendChild(newQuantityButtons);
  newItemCard.appendChild(newItemTotalPrice);

  newItemDetails.appendChild(newItemName);
  newItemDetails.appendChild(newItemPrice);

  newQuantityButtons.appendChild(newMinusButton);
  newQuantityButtons.appendChild(newProductQuantity);
  newQuantityButtons.appendChild(newPlusButton);

  newItemImg.src = newItem.img;
  newItemName.innerText = productTitles[basketItems[i].id - 1];

  cartItemGrid.appendChild(newItemCard);
}

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
