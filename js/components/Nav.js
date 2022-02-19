class Nav {
    constructor() {
        this.element;
    }

    create() {
        const navElement = document.createElement('nav');
        navElement.classList.add('nav');
        const navList = document.createElement('ul');
        navList.classList.add('nav__list');

        const navItem = document.createElement('li');
        navItem.classList.add('nav__item');
        const navItem1 = document.createElement('li');
        navItem1.classList.add('nav__item');
        const navItem2 = document.createElement('li');
        navItem2.classList.add('nav__item');

        const navLink = document.createElement('a');
        navLink.href = "/"
        navLink.innerText = 'home'
        const navLink1 = document.createElement('a');
        navLink1.href = '/#cart'
        navLink1.innerText = 'cart'
        const navLink2 = document.createElement('a');
        navLink2.href = '/#shop'
        navLink2.innerText = 'shop'

        navItem.append(navLink)
        navItem1.append(navLink1)
        navItem2.append(navLink2)
        navList.append(navItem,navItem1,navItem2)
        navElement.append(navList)

        this.element = navElement;
    }

    init() {
        this.create();
        return this.element;
    }
}
const nav = new Nav().init();

export { nav };
