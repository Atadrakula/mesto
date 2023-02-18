let editButtonPopup = document.querySelector(".profile__button-edit");
let editPopup = document.querySelector(".popup");
let editProfileClose = document.querySelector(".popup__close");
let userName = document.querySelector(".popup__input-name");
let userActivity = document.querySelector(".popup__input-activity");
let profileName = document.querySelector(".profile__name");
let profileActivity = document.querySelector(".profile__activity");
let formElement = document.querySelector(".popup__container");
let saveProfile = document.querySelector(".popup__submit");

editButtonPopup.addEventListener("click", function () {
  userName.value = profileName.textContent;
  userActivity.value = profileActivity.textContent;
  openPopup(editPopup);
});

editProfileClose.addEventListener("click", function () {
  closePopup(editPopup);
});

saveProfile.addEventListener("click", function() {
  profileName.textContent = userName.value;
  profileActivity.textContent = userActivity.value;
  closePopup(editPopup);
});


formElement.addEventListener("submit", handleFormSubmit);

function openPopup(popup) {
  popup.classList.add("popup__opened");
}

function closePopup(popup) {
  popup.classList.remove('popup__opened');
}


function handleFormSubmit(event) {
  event.preventDefault();
  let nameInput = userName.value;
  let jobInput = userActivity.value;
  profileName.textContent = nameInput;
  profileActivity.textContent = jobInput;
}
