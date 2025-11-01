const modal = document.getElementById("contact-confirm-modal");
const emailInput = document.querySelector(".footer-form__input");
const openBtn = document.getElementById("open-contact-confirm-modal");
const closeBtn = document.querySelector(".footer-form__modal-close");
const okBtn = document.querySelector(".footer-form__modal-ok-btn");

openBtn.addEventListener("click", () => {
  console.log(emailInput);

  if (!emailInput.value) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

okBtn.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
