import { onAddCart } from '../utils/buyButton.js';
import { getCookie, setCookie } from '../utils/cookies.js';
import { cartWidget } from './cartWidget.js';
import { header } from './Header.js';

function product( data, id) {
    const shopContainer = document.createElement('div');
    shopContainer.classList.add('product__container');
    let buy = [];

    if (getCookie('data')) buy = JSON.parse(getCookie('data'));

    if (!data) return;

    data.forEach((item) => {
        if (id == item.id) {
            const itemElem = document.createElement('div');
            itemElem.classList.add('product__item');

            const imgItem = document.createElement('div');
            imgItem.classList.add('product__item__img');
            imgItem.style.backgroundImage = `url(${item.image})`;

            const informBlock = document.createElement('div');
            informBlock.classList.add('product__inform');

            const titleItem = document.createElement('h3');
            titleItem.classList.add('title');

            titleItem.innerText = item.title;

            const categoryItem = document.createElement('p');
            categoryItem.classList.add('category');
            categoryItem.innerText = item.category;

            const priceItem = document.createElement('p');
            priceItem.classList.add('product__price');
            priceItem.innerText = item.price + '$';

            const descriptionItem = document.createElement('p');
            descriptionItem.classList.add('product__description');
            descriptionItem.innerText = item.description;

            const buyButton = document.createElement('button');
            buyButton.classList.add('buy__button');
            buyButton.innerText = 'add to cart';

            informBlock.append(
                titleItem,
                categoryItem,
                descriptionItem,
                priceItem,
                buyButton
            );
            itemElem.append(imgItem, informBlock);
            shopContainer.append(itemElem);

            buyButton.addEventListener('click', (e) => onAddCart(e,buy,item));
        }
    });
    return shopContainer;
}

export default product;
