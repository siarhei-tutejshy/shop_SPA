import { getCookie, setCookie } from '../utils/cookies.js';
import { cartWidget } from './cartWidget.js';
import { header } from './Header.js';
import Slider from './Slider.js';

function home() {
    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop__container');
    
    let data = JSON.parse(localStorage.getItem('data'));
    let buy = [];

    if (getCookie('data')) buy = JSON.parse(getCookie('data'));

    if (!data) return;

    const slider = new Slider(data).init();

    const welcomeButton = document.createElement('div');
    welcomeButton.classList.add('shop__welcome');

    const shopLink = document.createElement('a');
    shopLink.href = '/#shop'
    shopLink.innerText = 'welcome to our shop';

    welcomeButton.append(shopLink) 
    
    shopContainer.append(slider,welcomeButton);

    return shopContainer;
}

export default home;
