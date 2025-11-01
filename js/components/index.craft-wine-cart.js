document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".craft-wines-btn");

  let cart = []; // 

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".craft-wines-item");
      const name = card.querySelector(".craft-wines-name").textContent;
      const priceText = card.querySelector(".craft-wines-price").textContent;
      const price = parseFloat(priceText.replace(",", "."));

      cart.push({ name, price });

      cartIcon.classList.remove("hidden");

      cartCount.textContent = cart.length;
    });
  });

const cartPopup = document.querySelector(".cart-popup-wrapper");
const closeBtn = document.querySelector(".close-btn");

cartIcon.addEventListener("click", () => {
  cartPopup.classList.add("active"); 
});


closeBtn.addEventListener("click", () => {
  cartPopup.classList.remove("active");
});


cartPopup.addEventListener("click", (e) => {
  if (e.target === cartPopup) {
    cartPopup.classList.remove("active");
  }
});