const images = document.querySelectorAll(".instagram-img");
const lightbox = document.getElementById("footer-lightbox");
const lightboxImg = lightbox.querySelector(".footer__lightbox-image");
const closeBtn = lightbox.querySelector(".footer__lightbox-close");
const prevBtn = lightbox.querySelector(".footer__lightbox-prev");
const nextBtn = lightbox.querySelector(".footer__lightbox-next");

let currentIndex = 0;

function showImage(index, direction = "right") {
  const newSrc = images[index].src;
  const exitClass = direction === "right" ? "slide-left" : "slide-right";
  const enterClass = direction === "right" ? "slide-right" : "slide-left";

  // Вихід поточного зображення
  lightboxImg.classList.add(exitClass);

  setTimeout(() => {
    lightboxImg.src = newSrc;
    lightboxImg.classList.remove(exitClass);
    lightboxImg.classList.add(enterClass);

    requestAnimationFrame(() => {
      lightboxImg.classList.remove(enterClass);
    });
  }, 300);

  lightbox.classList.add("active");
  currentIndex = index;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => showImage(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

prevBtn.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(newIndex, "left");
});

nextBtn.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % images.length;
  showImage(newIndex, "right");
});

// Закриття при кліку на фон
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});

// Підтримка клавіш ← → Esc
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "Escape") closeBtn.click();
});
