const wineTypes = [
  {
    id: 0,
    legend: "For Your Special Events",
    link: "#index.best-deal",
    image: "../../img/wine-types/event.jpeg",
    description: "We have a great collection of exclusive reserve wines.",
    name: "wine-types__events",
  },
  {
    id: 1,
    legend: "100% Organic Wines",
    link: "#index.wine-special",
    image: "../../img/wine-types/organic.jpeg",
    description: "Only natural wine without all kinds of additives or flavors.",
    name: "wine-types__organic",
  },
  {
    id: 2,
    legend: "Selected Grape Varieties",
    link: "#index.wine-special",
    image: "../../img/wine-types/selected.jpeg",
    description:
      "We produce and sell the finest wines made of the best grape varieties.",
    name: "wine-types__selected",
  },
];
function renderWineTypes(wineTypes) {
  const wineTypesHTML = [];
  for (const wineType of wineTypes) {
    const wineTypeHTML = ` 
  <div class="${wineType.name}" style="background-image:url('${wineType.image}')">
    <div class="wine-types__innerbloc">
      <h2 class="wine-types__legend">${wineType.legend}</h2>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16 L3000 16"
          style="fill: none; stroke: #c8693a; stroke-width: 2px"
        ></path>
      </svg>
      <p class="wine-types__description">
        ${wineType.description}
      </p>
      <a href="${wineType.link}" class="wine-types__learn-more"
        >Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
          height="100%"
        >
          <g fill="currentColor">
            <polygon
              points="76.389,53.202 76.389,63.601 89.991,50.003 76.39,36.401 76.389,46.8 10.011,46.8 10.011,53.201  "
              fill="currentColor"
            ></polygon>
          </g>
        </svg>
      </a>
    </div>
  </div>`;
    wineTypesHTML.push(wineTypeHTML);
  }
  const wineTypesSection = document.querySelector('.wine-types');
  wineTypesSection.innerHTML = wineTypesHTML.join('');
}
renderWineTypes(wineTypes);
