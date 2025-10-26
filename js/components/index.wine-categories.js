const WINE_CATEGORY = [
    {
        name: 'Red Wines',
        description: 'Great selection of red wines for you.',
        background: 'wine-red-category',
    },
    {
        name: 'White Wines',
        description: 'Top white wines for any occasion.',
        background: 'wine-white-category',
    },
];

function renderWineCategories(categories) {
    const categoriesHTML = [];
    for (const category of categories) {
        let categoryHTML = `
        <article class="wine-categories__container ${category.background} wine-categories__grid">
            <h4 class="wine-categories__title">${category.name}</h4>
            <svg class="wine-categories__separator">
                <path d="M0 16 L3000 16"></path>
            </svg>
            <p class="wine-categories__description">${category.description}</p>
            <a class="wine-categories__link" href="#craft-wines-section">Shop ${category.name.toLowerCase()}</a>
        </article>
        `;
        categoriesHTML.push(categoryHTML);
    };
    const wineCategoriesList = document.querySelector('.wine-categories__list');
    categoriesHTML.push(wineCategoriesList.innerHTML);
    wineCategoriesList.innerHTML = categoriesHTML.join('');
    addSmoothScrollListeners();
}

function addSmoothScrollListeners() {
    const targetLinks = document.querySelectorAll('.wine-categories__link, .promo-discounts__link');

    targetLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetSection = this.getAttribute('href');
            const targetElement = document.querySelector(`${targetSection}`);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

renderWineCategories(WINE_CATEGORY);