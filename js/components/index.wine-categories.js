const WINE_CATEGORY = [
    {
        name: 'Red Wines',
        description: 'Great selection of red wines for you.',
        background: 'wine-red-category',
        link: 'index.craft-wines.partial.html',
    },
    {
        name: 'White Wines',
        description: 'Top white wines for any occasion.',
        background: 'wine-white-category',
        link: 'index.craft-wines.partial.html',
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
            <a class="wine-categories__link" href="${category.link}">Shop ${category.name.toLowerCase()}</a>
        </article>
        `;
        categoriesHTML.push(categoryHTML);
    };
    const wineCategoriesList = document.querySelector('.wine-categories__list');
    categoriesHTML.push(wineCategoriesList.innerHTML);
    wineCategoriesList.innerHTML = categoriesHTML.join('');
}
renderWineCategories(WINE_CATEGORY);