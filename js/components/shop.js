import { onAddCart } from '../utils/buyButton.js';
import { getCookie, setCookie } from '../utils/cookies.js';
import { cartWidget } from './cartWidget.js';
import { header } from './Header.js';

function shop() {
    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop__container');

    

    let data = JSON.parse(localStorage.getItem('data'));
    let buy = [];
    if (getCookie('data'))  buy = JSON.parse(getCookie('data'));

    if (!data)  return;

    data.forEach((item) => {
        const itemElem = document.createElement('div');
        itemElem.classList.add('item');

        const imgItem = document.createElement('div');
        imgItem.classList.add('item__img');
        imgItem.style.backgroundImage = `url(${item.image})`;

        const titleItem = document.createElement('h3');
        titleItem.classList.add('title');
        const linkItem = document.createElement('a');
        linkItem.href = `#product/${item.id}`;
        linkItem.innerText = item.title;
        titleItem.append(linkItem);

        const priceItem = document.createElement('p');
        priceItem.classList.add('price');
        priceItem.innerText = item.price +'$';

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy__button');
        buyButton.innerText = 'add to cart';

        itemElem.append(imgItem, titleItem, priceItem, buyButton);
        shopContainer.append(itemElem);

        buyButton.addEventListener('click', (e) => onAddCart(e,buy,item));
            
        
       
    });
    return shopContainer;
}

export default shop;