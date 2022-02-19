class Header {
    constructor() {
        this.element;
    }

    create() {
        const appHeader = document.createElement('header');
        appHeader.classList.add('header');

        const logoHeader = document.createElement('div');
        logoHeader.classList.add('logo');

        const headerLink = document.createElement('a');
        headerLink.href ='#home'
        logoHeader.append(headerLink);
        
        appHeader.append(logoHeader)
        this.element = appHeader;
    }
    
    init() {
        this.create();
        console.log('sdasdadsasdsa')
        return this.element;
    }
}
const header = new Header().init();

export {header}