## Team 4394 Project contributers

| №   | Name                | Personal Project                                                             | GitHub Profile                                            |
| --- | ------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1   | Volodumur Yatsenko  | [Personal Project](https://github.com/vovan22/Task-1-advanced)               | [GitHub Profile Link](https://github.com/vovan22)         |
| 2   | Serafym Romanchenko |                                                                              | [GitHub Profile Link](https://github.com/Serafym42)       |
| 3   | Serhieiev Maksym    |                                                                              | [GitHub Profile Link](https://github.com/Lavo4nik)        |
| 4   | Vitalii Osadchuk    | [Personal Project](https://github.com/VitaliyOsadchuk/Business_landing_page) | [GitHub Profile Link](https://github.com/VitaliyOsadchuk) |
| 5   | Smetana Andriy      |                                                                              | [GitHub Profile Link](https://github.com/AndriyLike)      |
| 6   | Iryna Perepichka    |                                                                              | [GitHub Profile Link](https://github.com/moonlesse)       |
| 7   | Renata Panych       | [Personal Project](https://github.com/RenataPanych/project)                  | [GitHub Profile Link](https://github.com/RenataPanych)    |
| 8   | Volodymyr Potaychuk |                                                                              | [GitHub Profile Link](https://github.com/Lwowsky/html)    |
| 9   | Maksym Pinder       |                                                                              | [GitHub Profile Link](https://github.com/PinderMaksim)    |
| 10  | Oleh Vlasyuk        |                                                                              | [GitHub Profile Link](https://github.com/Oleh-323)        |
| 11  | Shapovalova Yuliia  | [Personal Project](https://github.com/julishapovalova/html-web-project)      | [GitHub Profile Link](https://github.com/julishapovalova) |
| 14 | Hladun Pavlo         |                             |                                                |
[GitHub Profile Link](https://github.com/HladunPavlo)     |
---

## FAQ CSS Files in Project

- css/
  - **/components/** _( Тут складаємо CSS файли секцій.)_
    - /index.traditional-wine.css
    - /index.promo-discounts.css
  - **/vars.css** _(сюди зберемо увесь перевикористаний CSS)_
  - **/style.css** _(ось тут тількі імпорти інших CSS. Приклад імпорту `@import url("components/index.video-history.css");`)_
  - **/reboot.min.css** - _файл нормалізації стилів_

---

## FAQ Image Files in Project

- img/
  - **/pratitial-img/**
    - /global.index.section-name/ _(медиа используемые только в секции)_
  - **/global-assets/** _(все повторяющиеся медиа элементы)_
  - **/social/**
    - /icons/_(папка иконками социальных сетей)_
    - /instagram/ _(Блок инсты. full img для галереи и превью для футера)_
  - **/blog/**
    - date/ _(изображения блог-постов , так же идут и в single-page поста. Превью и full img)_
  - **/shop/**
    - /products/ _(изображения товаров, т.к. они повторяются и идут потом на страницу товара, корзину и подтверждение. Full-img и кадрированные)_
    - /icons/ _(иконки связанные с корзиной, магазином, доставкой и т.д.)_

---

### HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main
  data-hx-trigger="load"
  data-hx-swap="outerHTML"
  data-hx-get="index.main.partial.html"
></main>
```

```js
function init() {
  import("...js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```
