const mainImg = document.querySelector('.product-main-img');
const popup = document.querySelector('.image-popup');
const popupMain = document.querySelector('.popup-main-img');
const popupClose = document.querySelector('.popup-close');
const popupThumbs = document.querySelectorAll('.popup-thumb');

mainImg.addEventListener('click', () => {
  popup.classList.add('active');
  popupMain.src = mainImg.src;
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

popupThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    popupMain.src = thumb.dataset.full;
    popupThumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') popup.classList.remove('active');
});