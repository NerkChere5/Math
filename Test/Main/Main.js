import '../../Api/Components/Menu/Menu.js';
import '../../Units/Components/Task/Task.js';
import '../../Units/Components/Footer/Footer.js';

let menu = document.querySelector('x-menu');

menu.menu__items = [
    {
        "caption": "Главная",
        "type": "menu__item",
        "url": "../"
    },
    {
        "caption": "Теоретический материал",
        "type": "menu__item",
        "url": "../Description"
    },
    {
        "caption": "Нестандартные случаи",
        "type": "menu__item",
        "url": "../Facts"
    },
    {
        "caption": "Контрольный тест",
        "type": "menu__item",
        "url": "./"
    },
];
