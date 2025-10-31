const galleryImages = document.querySelectorAll(".instagram-img");
const lightbox = document.getElementById("footer-lightbox");
const track = lightbox.querySelector(".footer__lightbox-track");
const closeBtn = lightbox.querySelector(".footer__lightbox-close");
const prevBtn = lightbox.querySelector(".footer__lightbox-prev");
const nextBtn = lightbox.querySelector(".footer__lightbox-next");
const zoomInBtn = lightbox.querySelector(".footer__lightbox-zoom-in");
const zoomOutBtn = lightbox.querySelector(".footer__lightbox-zoom-out");

let slides = [];
let currentIndex = 0;
let isTransitioning = false;
let zoomLevel = 1;

function openLightbox(startIndex) {
  track.innerHTML = "";
  galleryImages.forEach((galleryImage) => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "footer__lightbox-image-container";
    track.appendChild(imgContainer);
    const img = document.createElement("img");
    img.className = "footer__lightbox-image";
    img.src = galleryImage.src;
    img.alt = galleryImage.alt;
    imgContainer.appendChild(img);
    track.appendChild(imgContainer);
  });

  slides = Array.from(track.children);

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.insertBefore(lastClone, slides[0]);
  track.appendChild(firstClone);

  slides = Array.from(track.children);

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";

  currentIndex = startIndex + 1;
  setTranslate(false);
  resetZoom();

  window.addEventListener("resize", onResize);
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  window.removeEventListener("resize", onResize);
}

nextBtn.addEventListener("click", () => moveSlide(1));
prevBtn.addEventListener("click", () => moveSlide(-1));

function moveSlide(direction) {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex += direction;
  setTranslate(true);
  resetZoom();

  track.addEventListener("transitionend", handleLoopReset, { once: true });
}

function setTranslate(withTransition = true) {
  if (withTransition) track.style.transition = `transform 0.5s ease`;
  else track.style.transition = "none";

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function handleLoopReset() {
  const realCount = galleryImages.length;

  if (currentIndex === slides.length - 1) {
    currentIndex = 1;
    track.style.transition = "none";
    setTranslate(false);
  } else if (currentIndex === 0) {
    currentIndex = realCount;
    track.style.transition = "none";
    setTranslate(false);
  }

  isTransitioning = false;
  applyZoom();
}

zoomInBtn.addEventListener("click", () => {
  zoomLevel = Math.min(zoomLevel + 0.25, 3);
  applyZoom();
});

zoomOutBtn.addEventListener("click", () => {
  zoomLevel = Math.max(zoomLevel - 0.25, 1);
  applyZoom();
});

function onResize() {
  setTranslate(false);
}

function applyZoom() {
  slides.forEach((slide, idx) => {
    const img = slide.querySelector("img");
    if (!img) return;
    if (idx === currentIndex) {
      img.style.transform = `scale(${zoomLevel})`;
      img.style.transition = "transform 0.2s ease";
      img.style.cursor = zoomLevel > 1 ? "grab" : "auto";
    } else {
      img.style.transform = "scale(1)";
      img.style.cursor = "auto";
    }
  });
  zoomInBtn.disabled = zoomLevel >= 3;
  zoomOutBtn.disabled = zoomLevel <= 1;
}
function resetZoom() {
  zoomLevel = 1;
  applyZoom();
}

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowRight") moveSlide(1);
  if (e.key === "ArrowLeft") moveSlide(-1);
  if (e.key === "Escape") closeLightbox();
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
