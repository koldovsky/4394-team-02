addToCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    cart.push({ name, price });
    cartCount.textContent = cart.length;

    cartIcon.classList.remove('hidden');
  });
});

document.getElementById('checkout-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Order placed successfully!');
  cart = [];
  cartCount.textContent = 0;
  checkoutModal.style.display = 'none';

  cartIcon.classList.add('hidden');
});