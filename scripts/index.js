// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(card, deleteCard){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = card.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt){
        deleteCard(cardElement);
    })

    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(element){
    element.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item){
    cardsList.append(addCard(item, deleteCard));
})
