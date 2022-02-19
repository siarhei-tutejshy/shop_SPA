import { getCookie, setCookie } from '../utils/cookies.js';
import { cartWidget } from './cartWidget.js';
import { header } from './Header.js';

function cart() {
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart__container');

    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total_price');
    totalPrice.innerText = cartWidget(getCookie('data')).children[1].innerText;
    let data = JSON.parse(localStorage.getItem('data'));

    let buy = [];
    let cartData = [];
    if (getCookie('data')) buy = JSON.parse(getCookie('data'));

    if (!data) return;

    let countBuy = buy.map((item) => {
        let count = 0;
        buy.forEach((item1) => {
            if (item.id == item1.id) count++;
        });
        item.quantity = count;
        return item;
    });

    function printUniqueResults(arrayOfObj, key) {
        return arrayOfObj.filter((item, index, array) => {
            return (
                array.map((mapItem) => mapItem[key]).indexOf(item[key]) ===
                index
            );
        });
    }

    function showPrice() {
        setCookie('data', JSON.stringify(buy));
        document.querySelector('.header .cart__widget').remove();
        header.append(cartWidget(getCookie('data')));
        totalPrice.innerText = cartWidget(
            getCookie('data')
        ).children[1].innerText;
    }
console.log(data)
    countBuy = printUniqueResults(countBuy, 'id');
    data.forEach((item) => {
        countBuy.forEach((cart) => {
            if (item.id == cart.id) {
                item.quantity = cart.quantity;
                cartData.push(item);
            }
        });
    });

    cartData.forEach((item) => {
        const itemElem = document.createElement('div');
        itemElem.classList.add('item__cart');

        const imgItem = document.createElement('div');
        imgItem.classList.add('item__cart__img');
        imgItem.style.backgroundImage = `url(${item.image})`;

        const titleItem = document.createElement('h3');
        titleItem.classList.add('title');
        const linkItem = document.createElement('a');
        linkItem.href = `#product/${item.id}`;
        linkItem.innerText = item.title;
        titleItem.append(linkItem);

        const quantityItem = document.createElement('div');
        quantityItem.classList.add('item__cart__quantity');

        const quantityPlus = document.createElement('button');
        quantityPlus.classList.add('plus');
        quantityPlus.innerText = '+';

        const quantityMinus = document.createElement('button');
        quantityMinus.classList.add('minus');
        quantityMinus.innerText = '-';

        const quantityCount = document.createElement('div');
        quantityCount.classList.add('counter');
        quantityCount.innerText = item.quantity;
        quantityItem.append(quantityMinus, quantityCount, quantityPlus);

        const priceItem = document.createElement('p');
        priceItem.classList.add('item__cart__price');
        priceItem.innerText = item.price * item.quantity + '$';

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete__button');

        itemElem.append(
            imgItem,
            titleItem,
            quantityItem,
            priceItem,
            deleteButton
        );
        cartContainer.append(itemElem);

        quantityMinus.addEventListener('click', (event) => {
            let cart = buy.find((i) => i.id == item.id);
            item.quantity--;
            priceItem.innerText = item.price * item.quantity + '$';
            quantityCount.innerText = item.quantity;
            buy.splice(buy.indexOf(cart), 1);
            showPrice();
            if (+item.quantity < 1) itemElem.remove();
            quantityPlus.disabled = false;
        });

        quantityPlus.addEventListener('click', (event) => {
            cartData.push(item);
            buy.push({ id: item.id, price: item.price });
            showPrice();
            item.quantity++;
            priceItem.innerText = item.price * item.quantity + '$';
            quantityCount.innerText = item.quantity;
            if (+item.quantity > 4) quantityPlus.disabled = true;
        });

        deleteButton.addEventListener('click', () => {
            itemElem.remove();
            buy = buy.filter((cart) => cart.id !== item.id);
            showPrice();
        });
    });
    cartContainer.append(totalPrice);
    return cartContainer;
}

export default cart ;
