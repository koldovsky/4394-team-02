# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```
## team 

- Volodumur Yatsenko
- Serafym Romanchenko
- Serhieiev Maksym
- Vitalii Osadchuk
- Smetana Andriy
- Iryna Perepichka
- Renata Panych
- Volodymyr Potaychuk
- Maksym Pinder
- Oleh Vlasyuk


## FAQ CSS Files in Project
* css/
    * /components/ ( Тут складаємо CSS файли секцій. Назва файлів global/index.section-name.css)
            * /index.traditional-wine.css
            * /index.promo-discounts.css
    * /vars.css ( сюди зберемо увесь перевикористаний CSS)
    * /style.css ( ось тут тількі імпорти інших CSS. Приклад імпорту @import url("components/index.video-history.css");)
    * /reboot.min.css - файл нормалізації стилів

## FAQ Image Files in Project
* img/
    * /pratitial-img/
        * /global.index.section-name/ (медиа используемые только в секции)
    * /global-assets/ (все повторяющиеся медиа элементы)
    * /social/
        * /icons/(папка иконками  социальных сетей )
        * /instagram/ (Блок инсты. full img для галереи и превью для футера)
    * /blog/
        * date/ ( изображения блог-постов , так же идут и в single-page поста. Превью и full img)
    * /shop/
        * /products/ (изображения товаров, т.к. они повторяются и идут потом на страницу товара, корзину и подтверждение. Full-img и кадрированные)
        * /icons/ (иконки связанные с корзиной, магазином, доставкой и т.д.)