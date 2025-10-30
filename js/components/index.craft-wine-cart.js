  const addToCartButtons = document.querySelectorAll('.craft-wines-btn');
  const cartIcon = document.getElementById('cart-icon');
  const cartCount = document.getElementById('cart-count');
  const modal = document.getElementById('checkout-modal');
  const itemsContainer = document.getElementById('checkout-items');
  const closeModal = document.getElementById('close-modal');
  const form = document.getElementById('checkout-form');

  let cart = [];

  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.craft-wines-item');
      const name = item.querySelector('.craft-wines-name').textContent.trim();
      const price = item.querySelector('.craft-wines-price').textContent.trim();

      cart.push({ name, price });
      cartCount.textContent = cart.length;

      cartIcon.classList.remove('hidden');
      cartIcon.style.opacity = '1';

      cartIcon.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.3)' }, { transform: 'scale(1)' }],
        { duration: 300, easing: 'ease-out' }
      );
    });
  });

  cartIcon.addEventListener('click', () => {
    if (cart.length === 0) {
      itemsContainer.innerHTML = <p>Your cart is empty.</p>;
    } else {
      itemsContainer.innerHTML = cart.map(item => `<p>${item.name} — ${item.price}</p>`).join('');
    }
    modal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    cartCount.textContent = 0;
    modal.style.display = 'none';
    cartIcon.classList.add('hidden');
    cartIcon.style.opacity = '0';
  });
