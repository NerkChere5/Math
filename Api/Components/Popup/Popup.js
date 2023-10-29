import {Component} from '../../Component.js';


class Popup extends Component {
    static _url = import.meta.url;


    _body = null;


    set visible(value) {
        this._body.setAttribute('visible', value);
    }


    async _build() {
        await super._build();

        let button = this._shadow.querySelector('.button');
        this._body = this._shadow.querySelector('.root');

        button.addEventListener('click', () => this.visible = false);
    }


    // _on__button_click() {
        // this.visible = false;
    // }
}


Popup.init();
