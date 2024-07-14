function addCard(cardTemplate, cardData, deleteCard, like, openCardImage) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", function (evt) {
    like(evt.target);
  });

  cardImage.addEventListener("click", function (evt) {
    evt.stopPropagation();
    openCardImage(cardImage);
  });

  return cardElement;
}

function deleteCard(el) {
  el.remove();
}

function like(button) {
  button.classList.toggle("card__like-button_is-active");
}

export { addCard, deleteCard, like };
