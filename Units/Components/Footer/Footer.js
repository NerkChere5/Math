import {Component} from '../../../Api/Component.js';


export class Footer extends Component {
    static _url = import.meta.url;


    _date_container = null;


    async _build() {
        await super._build();

        this._date_container = this._shadow.querySelector('.date_container');
        this._set_date();
    }

    _set_date() {
        let date = new Date();
        this._date_container.textContent = date.getFullYear() + ' г.';
    }
}


Footer.init();
