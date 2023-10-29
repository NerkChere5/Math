let menu__items = [
  {
    caption: 'Logo',
    picture: '',
    type: 'menu__logo',
  },
  {
    caption: 'Main',
    picture: '',
    type: 'menu__item',
    url: '/',
  },
  {
    caption: 'News',
    picture: '',
    type: 'menu__item',
    url: '/new',
  },
  {
    caption: 'Товары',
    picture: '',
    type: 'menu__item',
    categories: [
      {
        caption: 'Компьютеры',
        items: [
          {
            caption: 'ПК',
            picture: '',
            type: 'menu__category_item',
            url: '#',
          },
          {
            caption: 'Ноутбуки',
            picture: '',
            type: 'menu__category_item',
            url: '#',
          },
        ],
        picture: '',
        type: 'menu__category',
      },
      {
        caption: 'Телефоны',
        items: [
          {
            caption: 'Стационарные',
            picture: '',
            type: 'menu__category_item',
            url: '#',
          },
          {
            caption: 'Мобильные',
            picture: '',
            type: 'menu__category_item',
            url: '#',
          },
        ],
        picture: '',
        type: 'menu__category',
      },
    ],
  },
  {
    caption: 'User',
    items: [
      {
        caption: 'out',
        url: '',
      },
      {
        caption: 'settings',
        url: '',
      },
    ],
    picture: '',
    type: 'menu__profile',
  },
];



let menu_item = {
  caption: '',
  categories: [],
  items: [],
  picture: '',
  type: '',
  url: '',
};



_define__menu_items() {
  this.menu__items = [];
  
  let menu__items_raw = this.children;
  
  for (let menu__item_raw of menu__items_raw) {
   this.menu__items.push(this._process__menu_item(menu__item_raw));
    
    if (!menu__item_raw.children.length) continue;
    
    let menu__categories_raw = menu__item_raw.querySelectorAll("[data-type='menu__category']");
    
    if (menu__categories_raw.length) {
      for (let menu__category_raw of menu__categories_raw) {
        let menu__category = this._process__menu_item(menu__category_raw);
        
        for (let menu__category_item of menu__category_raw.children) {
          menu__category.items.push(this._process__menu_item(menu__category_item));
        }
        
        this.menu__items.at(-1).categories.push(menu__category);
      }
    }
    else {
      for (let menu__item_child_raw of menu__item_raw.children) {
        this.menu__items.at(-1).items.push(this._process__menu_item(menu__item_child_raw));
      }
    }
  }
}
