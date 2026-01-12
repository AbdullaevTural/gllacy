var feedbackLink = document.querySelector(".contacts_btn");
var modalfeedback = document.querySelector(".modal-feedback");
var close = modalfeedback.querySelector(".modal-close");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalfeedback.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalfeedback.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (modalfeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalfeedback.classList.remove("modal-show");
    }
  }
});
