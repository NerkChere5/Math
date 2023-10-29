import '../../../Api/Components/Popup/Popup.js';
import '../../../Api/Components/Screen/Screen.js';
import '../../../Api/Components/Slider/Slider.js';

import {Combinatorics} from '../../../Api/Combinatorics.js';
import {Create_solve} from './Modules/createSolve.js';
import {Component} from '../../../Api/Component.js'


export class Task extends Component {
    static _url = import.meta.url;


    _answers = null;
    _count_true = 0;
    _count_error = 0;
    _result_true = null;
    _screens = null;
    _slider = null;
    _task = null;
    _task_integers = null;
    _task_num = 0;
    _tasks = [];
    _time = 0;
    _task_close = [];
    _timerId = 0;


    async _build() {
        await super._build();

        this._slider = this._shadow.querySelector('x-slider');
        this._answers = this._shadow.querySelectorAll('input');
        this._screens = this._shadow.querySelectorAll('x-screen');
        this._slider.module = this;

        // await this._slider.built;
        // this._slider._arrows[0].remove();
    }


    _getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    _create_task_1() {
        let argument_1 = this._task_integers[0];
        let argument_2 = this._task_integers[1];
        let k = this._getRandomNum(1, 7);
        let n = this._getRandomNum(1, 7);

        if (k > n) {
            argument_1.textContent = k;
            argument_2.textContent = n;

            return [k, n];
        }
        else {
            argument_1.textContent = n;
            argument_2.textContent = k;

            return [n, k];
        }
    }


    _create_task_2() {
        let argument_1 = this._task_integers[0];
        let argument_2 = this._task_integers[1];
        let k = this._getRandomNum(1, 7);
        let n = this._getRandomNum(1, 7);

        argument_1.textContent = n;
        argument_2.textContent = k;

        return [n, k];
    }


    _create_task_3() {
        let argument_1 = this._task_integers[0];
        let n = this._getRandomNum(0, 7);

        argument_1.textContent = n;

        return n;
    }


    _create_task_4() {
        let argument_1 = this._task_integers[0];
        let argument_2 = this._task_integers[1];
        let k = this._getRandomNum(1, 29);
        let n = this._getRandomNum(1, 29);

        argument_1.textContent = n;
        argument_2.textContent = k;

        return [n, k];
    }


    _check_answer(num) {
        let answers_user = this._answers[num].value;

        if (this._task_close.includes(num)) return;

        this._task_close.push(num);

        if (!answers_user) {
            this._count_error++;

            return;
        }

        let types = [
            'sum',
            'multiplication',
            'permutation',
            'permutation_repeat',
            'placements',
            'placements_repeat',
            'combinations',
            'combinations_repeat',
        ];

        let type = types[num];

        if (num == 2) {
            this._result_true = Combinatorics[type](this._task);
        }
        else if (num == 3) {
            let n = this._task[0] + this._task[1];
            this._result_true = Combinatorics[type](n, this._task[0], this._task[1]);
        }
        else {
            this._result_true = Combinatorics[type](this._task[0], this._task[1]);
        }

        (answers_user == this._result_true) ? this._count_true++ : this._count_error++;

    }


    _defined_task() {
        if (this._task_num == 4 || this._task_num == 6) {
            this._task = this._create_task_1();
        }
        else if (this._task_num == 3 || this._task_num == 5 || this._task_num == 7) {
            this._task = this._create_task_2();
        }
        else if (this._task_num == 2) {
            this._task = this._create_task_3();
        }
        else if (this._task_num == 0 || this._task_num == 1) {
            this._task = this._create_task_4();
        }

        this._tasks.push(this._task_num);
    }


    _summarize() {
        clearInterval(this._timerId);

        this._slider._arrows[1].setAttribute('hidden', true)

        let result_minute = this._shadow.querySelector('.result_minute');
        let result_second = this._shadow.querySelector('.result_second');
        let result_curent = this._shadow.querySelector('.result_curent');
        let result_all = this._shadow.querySelector('.result_all');

        result_curent.textContent = this._count_true;
        result_all.textContent = this._count_true + this._count_error;
        result_minute.textContent = this._time >= 60 ? Math.trunc (this._time / 60) : 0;
        result_second.textContent = this._time > 60 ? this._time % 60 : this._time;
    }


    _timer() {
        this._time++;
        this._timerId = setTimeout(this._timer.bind(this), 1e3);
    }


    main(item_num) {
        // this._clear_answer();
        this._task_num = item_num - 1;

        if (this._task_num < 0) return;

        if (this._screens.length - 1 == item_num) {
            this._check_answer(this._task_num - 1)
            this._summarize();
            return;
        }
        else if (this._task_num > 0) {
            this._check_answer(this._task_num - 1);
        }
        else {
            this._timerId = setTimeout(this._timer.bind(this), 1e3);
        }

        this._task_integers = this._screens[item_num].querySelectorAll('.task');

        this._tasks.includes(this._task_num) ? false : this._defined_task();
    }
}


Task.init();
