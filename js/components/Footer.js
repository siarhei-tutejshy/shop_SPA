class Footer {
    constructor() {
        this.element;
    }
    
    create() {
        const appElement = document.createElement('footer');
        appElement.classList.add('footer');
        appElement.innerHTML = `
        <div class="footer__logo"></div>
        <div class="footer__contacts">
            <div class="address">12 av. Ney York City</div>
            <div class="phone">+123 456 788</div>
            <div class="email">info@gmail.com</div>
        </div>`;
        this.element = appElement;
    }
    
    init() {
        this.create();
        return this.element;
    }
}
const footer = new Footer().init();

export {footer}