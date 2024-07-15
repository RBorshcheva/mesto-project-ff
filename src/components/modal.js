function openModal(modal) {
  modal.classList.add("popup_is-opened");
  modal.addEventListener("click", closeModalOnOverlayClick);
  document.addEventListener("keydown", closeModalOnEsc);
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  modal.removeEventListener("click", closeModalOnOverlayClick);
  document.removeEventListener("keydown", closeModalOnEsc);
}

function closeModalOnOverlayClick(evt) {
  const evtTarget = evt.target;
  if (evtTarget.classList.contains("popup_is-opened")) {
    closeModal(evtTarget.closest(".popup"));
  }
}

function closeModalOnEsc(evt) {
  const popupIsOpened = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    closeModal(popupIsOpened);
  }
}

export { openModal, closeModal };
