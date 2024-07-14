import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";
import { addCard, deleteCard, like } from "./components/card";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardsList = document.querySelector(".places__list");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonArr = document.querySelectorAll(".popup__close");
const popupTypeAdd = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");

const formEditProfile = document.querySelector('form[name="edit-profile"]');
const inputJobFormEditProfile = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const inputNameFormEditProfile = formEditProfile.querySelector(
  ".popup__input_type_name"
);
const profileInfo = document.querySelector(".profile__info");
const nameFormField = profileInfo.querySelector(".profile__title");
const jobFormField = profileInfo.querySelector(".profile__description");

const newCardForm = document.querySelector('form[name="new-place"]');
const inputNameNewCardForm = newCardForm.querySelector(
  ".popup__input_type_card-name"
);
const inputUrlNewCardForm = newCardForm.querySelector(".popup__input_type_url");

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  cardsList.append(
    addCard(cardTemplate, item, deleteCard, like, openCardImage)
  );
});

// Работа модальных окон
editButton.addEventListener("click", function (evt) {
  evt.stopPropagation();
  inputJobFormEditProfile.value = jobFormField.textContent;
  inputNameFormEditProfile.value = nameFormField.textContent;
  openModal(popupTypeEdit);
});

closeButtonArr.forEach((closeButton) => {
  closeButton.addEventListener("click", function (evt) {
    const evtTarget = evt.target;
    const closePopup = evtTarget.closest(".popup");
    closeModal(closePopup);
  });
});

//Редактирование имени и информации о себе
formEditProfile.addEventListener("submit", function (evt) {
  formEditProfileSubmit(evt, closeModal);
});

function formEditProfileSubmit(evt, close) {
  evt.preventDefault();
  nameFormField.textContent = inputNameFormEditProfile.value;
  jobFormField.textContent = inputJobFormEditProfile.value;
  close(popupTypeEdit);
  formEditProfile.reset();
}
//Открытие попапа с картинкой
function openCardImage(cardImage) {
  const popupTypeImage = document.querySelector(".popup_type_image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");
  const popupImage = popupTypeImage.querySelector(".popup__image");
  popupImage.src = cardImage.src;
  popupImage.alt = cardImage.alt;
  popupCaption.textContent = cardImage.alt;
  openModal(popupTypeImage);
}

addButton.addEventListener("click", function (evt) {
  evt.stopPropagation();
  newCardForm.reset();
  openModal(popupTypeAdd);
});

function cardFormSubmit(evt, list, addCard, template, close) {
  evt.preventDefault();
  const cardName = inputNameNewCardForm.value;
  const url = inputUrlNewCardForm.value;
  const cardDescription = {
    link: url,
    name: cardName,
  };

  list.prepend(
    addCard(template, cardDescription, deleteCard, like, openCardImage)
  );
  close(popupTypeAdd);
}

newCardForm.addEventListener("submit", function (evt) {
  cardFormSubmit(evt, cardsList, addCard, cardTemplate, closeModal);
});
//Плавное открытие и закрытие попапов
const thinAnimation = document.querySelectorAll(".popup");
thinAnimation.forEach((popup) => {
  popup.classList.add("popup_is-animated");
});
