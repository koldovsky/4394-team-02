const bloglist = [
    {
        id: 1,
        image: 'img/blog/blog-img-first.jpg',
        data: '6 Oct 2025',
        name: 'Have Dinner with Jancis Robinson',
        discription: 'She’s been called the world’s most respected wine critic. She’s the author of not one, but three of the wine world’s most importan...',
        link: ".//blogfirst.html",
    },
    {
        id: 2,
        image: 'img/blog/blog-img-second.jpg',
        data: '3 Oct 2025',
        name: 'Why Hasn’t Anyone Bought Quartz Reef Yet?',
        discription: 'hile I primarily focus on the sensorial aspects of the wine world, I also pay attention to the business side of the industry, both...',
        link: ".//blogsecond.html",
    },
    {
        id: 3,
        image: 'img/blog/blog-img-third.jpg',
        data: '2 Oct 2025',
        name: 'Tasting Notes from Hella Chenin',
        discription: 'You’d be hard pressed to find someone more excited than I about the ascendancy of Chenin Blanc from obscurity to—well, let’s face ...',
        link: ".//blogthird.html",
    },
]

function renderBlogs(bloglist) {
    const blogsHTML = [];
    for (const blog of bloglist) {
        const blogHTML = `
    <div class="wines-blog__item">
            <a class="wines-blog__image-link" href="${blog.link}">
                <img class="wines-blog__image" src="${blog.image}" alt="Blog 1">
            </a>
            <p class="wines-blog__date">${blog.date}</p>
            <a class="wines-blog__title-link" href="${blog.link}">
                <h3 class="wines-blog__post-title">${blog.name}</h3>
            </a>
            <a class="wines-blog__excerpt-link" href="${blog.link}">
                <p class="wines-blog__excerpt">${blog.discription}</p>
            </a>
        </div>
    `;
        blogsHTML.push(blogHTML);
    }

    const blogsArray = document.querySelector(`.wines-blog__list`);
    blogsArray.innerHTML = blogsHTML.join('');
}

renderBlogs(bloglist);