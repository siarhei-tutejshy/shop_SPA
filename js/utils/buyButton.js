import { getCookie, setCookie } from './cookies.js';
import { cartWidget } from '../components/cartWidget.js';
import { header } from '../components/Header.js';

export const onAddCart = (e, buy, item) => {
    
    if (e.target.classList.contains('bought')) {
        e.target.classList.remove('bought');
        buy.splice(buy.indexOf(item), 1);
        e.target.innerText = 'add to cart';
    } else {
        e.target.classList.add('bought');
        buy.push({ id: item.id, price: item.price });
        e.target.innerText = 'in cart';
    }

    setCookie('data', JSON.stringify(buy));
    document.querySelector('.header .cart__widget').remove();
    header.append(cartWidget(getCookie('data')));
};
