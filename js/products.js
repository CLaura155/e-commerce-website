const aElementsArray = document.getElementsByClassName("img-in-grid");
const cardBoxesArray = document.getElementsByClassName("title-card");
const cardTitlesArray = document.getElementsByClassName("title-card-text");

for (i = 0; i < aElementsArray.length; i++) {
  let aElement = aElementsArray[i];
  let titleCardBox = cardBoxesArray[i];
  let titleCardText = cardTitlesArray[i];
  aElement.addEventListener("mouseover", showTitle);

  function showTitle() {
    titleCardBox.style.display = "block";
    titleCardText.style.display = "block";

    aElement.addEventListener("mouseout", disappearTitle);
    function disappearTitle() {
      titleCardBox.style.display = "none";
      titleCardText.style.display = "none";
    }
  }
}
