import { footer } from './Footer.js';
import { header } from './Header.js';
import { main } from './Main.js';
import { nav } from './Nav.js';
import { cartWidget } from './cartWidget.js';
import { getCookie } from '../utils/cookies.js';
import product from './product.js';
import shop from './shop.js';
import cart from './cart.js';
import home from './home.js';

class App {
    constructor() {
        this.app;
        
    }

    create() {
        const appElement = document.createElement('div');
        appElement.classList.add('app');
        this.app = appElement;
    }

    render() {
        const body = document.querySelector('body');
        console.dir(cartWidget(getCookie('data')));
        header.append(cartWidget(getCookie('data')));
        this.app.append(header, nav, main, footer);
        body.prepend(this.app);
    }

    renderHead() {
        const htmlElem = document.querySelector('html');
        htmlElem.setAttribute('lang', 'en');

        const head = document.querySelector('head');

        const metaUTF = document.createElement('meta');
        metaUTF.setAttribute('charset', 'UTF-8');

        const metaVP = document.createElement('meta');
        metaVP.name = 'viewport';
        metaVP.content = 'width=device-width, initial-scale=1.0';

        const linkCSS = document.createElement('link');
        linkCSS.rel = 'stylesheet';
        linkCSS.href = '/css/style.css';

        const linkCSSSlider = document.createElement('link');
        linkCSSSlider.rel = 'stylesheet';
        linkCSSSlider.href = '/css/slider.css';

        head.append(metaUTF, metaVP, linkCSS, linkCSSSlider);
    }

    get storage() {
        let data = localStorage.getItem('data');
        if (!data) return false;

        data = JSON.parse(data);
        return data;
    }

    set storage(data) {
        if (!data || data.length === 0) return;
        localStorage.setItem('data', JSON.stringify(data));
    }

    async getData() {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        this.storage = products;
    }

    loadMain() {
        main.innerHTML = '';
        let hashCheck = location.hash.replace('#', '');
        if(!this.storage) main.append(`<h3>no data</h3>`)

        if (!hashCheck || hashCheck == 'home') main.append(home(this.storage));

        if (hashCheck === 'cart') main.append(cart(this.storage));

        if (hashCheck === 'shop') main.append(shop(this.storage));

        if (hashCheck.includes('product')) {
            let id = hashCheck.replace('product/', '');
            main.append(product(this.storage, id));
        }
    }
    renderContent() {
        this.create();
        this.render();
        this.loadMain();
    }

    init() {
        this.renderHead();

        if (!this.storage || this.storage.length === 0) {
            this.getData().then(() => this.renderContent());
        } else {
            this.renderContent()
        }

        window.addEventListener('hashchange', () => this.loadMain());
        window.addEventListener('load', (event) => {
            let a = document.querySelectorAll('a[href="/"]');
            a.forEach((a) => {
                a.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.history.pushState('', '', '/');
                    this.loadMain();
                });
            });
        });
    }
}

export default new App().init();
