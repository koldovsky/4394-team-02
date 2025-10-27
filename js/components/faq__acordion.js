export default function initFAQ() {
  const items = document.querySelectorAll(".accordion__item");
  if (!items.length) return;

  items.forEach((clickedItem) => {
    const btn = clickedItem.querySelector(".accordion__button");
    const content = clickedItem.querySelector(".accordion__content");

    btn.addEventListener("click", () => {
      const isAlreadyOpen = clickedItem.classList.contains("active");

      items.forEach((item) => {
        item.classList.remove("active");
        const itemContent = item.querySelector(".accordion__content");
        if (itemContent) {
          itemContent.style.maxHeight = null;
        }
      });

      if (!isAlreadyOpen) {
        clickedItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

initFAQ();