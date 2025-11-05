function init() {
  import("./components/index.footer-form.js");
}

document.addEventListener("DOMContentLoaded", () => {
  const orderData = JSON.parse(sessionStorage.getItem("orderData"));

  if (!orderData) {
    window.location.href = "/";
    return;
  }

  document.querySelector(".order-number").textContent = orderData.orderNumber;

  const orderItemsContainer = document.querySelector(".order-items");

  while (orderItemsContainer.firstChild) {
    orderItemsContainer.removeChild(orderItemsContainer.firstChild);
  }

  let total = 0;

  orderData.items.forEach((item) => {
    const itemTotal = parseFloat(item.price) * item.quantity;
    total += itemTotal;

    const itemElement = document.createElement("div");
    itemElement.className = "order-item";
    itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <div class="item-quantity">${item.quantity}x</div>
                <div class="item-price">${item.price}USD</div>
            </div>
        `;
    orderItemsContainer.appendChild(itemElement);
  });

  const totalElement = document.createElement("div");
  totalElement.className = "order-total";
  totalElement.textContent = `Total: ${total.toFixed(2)}USD`;
  orderItemsContainer.appendChild(totalElement);

  const customerDetails = orderData.customerDetails;
  document.querySelector(".info-row:nth-child(1) .value").textContent =
    customerDetails.name;
  document.querySelector(".info-row:nth-child(2) .value").textContent =
    customerDetails.email;
  document.querySelector(".info-row:nth-child(3) .value").textContent =
    customerDetails.phone;
  document.querySelector(".info-row:nth-child(4) .value").textContent =
    customerDetails.comment || "";
  //hamburger
  function initHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header__menu");
    const social = document.querySelector(".header__block");
    const links = document.querySelectorAll(".header__menu a");

    if (!hamburger || !menu || !social) return;

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
      social.classList.toggle("active");
      document.body.classList.toggle("lock");
    });

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href") === "#") {
          e.preventDefault();
        }
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        social.classList.remove("active");
        document.body.classList.remove("lock");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initHamburger);

  document.body.addEventListener("htmx:afterSwap", (e) => {
    if (e.target.classList.contains("header")) {
      initHamburger();
    }
  });

  $(document).ready(function () {
    initWinesSlider();
  });

  document.body.addEventListener("htmx:afterSwap", function (event) {
    if ($(event.target).find(".wines__block").length > 0) {
      initWinesSlider();
    }
  });

  function initWinesSlider() {
    if ($(".wines__block").hasClass("slick-initialized")) {
      return;
    }

    $(".wines__block").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      centerMode: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
          },
        },
      ],
    });
  }
});

document.body.addEventListener("htmx:afterOnLoad", () => {
  init();
});

document.body.addEventListener("htmx:afterSwap", (event) => {
  if (event.target.classList.contains("craft-wines")) {
    import("./components/index.craft-wine-cart.js").then((module) => {
      if (module.initCraftCart) {
        module.initCraftCart();
      }
    });
  }
});

function renderLastOrderInto(container) {
  const raw = sessionStorage.getItem("lastOrder");
  if (!raw) {
    return;
  }
  let order;
  try {
    order = JSON.parse(raw);
  } catch (err) {
    return;
  }

  const items = order.items || [];
  const customer = order.customer || {};

  const total = items.reduce(
    (s, it) => s + Number(it.price || 0) * Number(it.qty || 1),
    0
  );

  const leftHtml = `
		<div class="order-success-left">
			<div class="order-items">
				${items
          .map(
            (it) => `
					<div class="order-item-row">
						<div class="order-item-img"><img src="/img/craft-wines/craft-wines-${(
              it.name || ""
            )
              .toLowerCase()
              .replace(/\s/g, "-")}.jpg" alt="${it.name}"/></div>
						<div class="order-item-name">${it.name}</div>
						<div class="order-item-qty">${it.qty}x</div>
						<div class="order-item-price">${(Number(it.price) * Number(it.qty)).toFixed(
              2
            )} USD</div>
					</div>
				`
          )
          .join("")}
			</div>
			<div class="order-total">Total: <strong>${total.toFixed(2)} USD</strong></div>
		</div>
	`;

  const rightHtml = `
		<div class="order-success-right">
			<h4>Customer details</h4>
			<div class="customer-field"><strong>Comment:</strong><div class="customer-value">${
        customer.comment || ""
      }</div></div>
			<div class="customer-field"><strong>Name:</strong><div class="customer-value">${
        customer.name || ""
      }</div></div>
			<div class="customer-field"><strong>Email:</strong><div class="customer-value">${
        customer.email || ""
      }</div></div>
			<div class="customer-field"><strong>Phone:</strong><div class="customer-value">${
        customer.phone || ""
      }</div></div>
		</div>
	`;

  container.innerHTML = `<div class="order-success-grid">${leftHtml}${rightHtml}</div>`;
}

function handlePossibleOverlay(node) {
  if (!(node instanceof HTMLElement)) return;
  const outer =
    node.classList && node.classList.contains("order-success-overlay")
      ? node
      : node.querySelector?.(".order-success-overlay");
  if (outer) {
    const content = outer.querySelector(".order-success-content");
    if (content) renderLastOrderInto(content);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handlePossibleOverlay(document);
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const n of m.addedNodes) {
        handlePossibleOverlay(n);
      }
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
});
