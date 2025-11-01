const modal = document.getElementById("contact-confirm-modal");
const openBtn = document.getElementById("open-contact-confirm-modal");
const closeBtn = document.querySelector(".footer__form-modal-close");
const okBtn = document.getElementById("footer__form-modal-ok-btn");

openBtn.addEventListener("click", () => {
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
