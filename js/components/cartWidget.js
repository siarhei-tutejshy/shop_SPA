function cartWidget(cookies) {
    let countItems = 0;
    let totalPrice = '00.00'

    if (cookies) {
        let items = JSON.parse(cookies);
        countItems = items.length;
        let result = items.reduce((sum, item) => sum + item.price, 0);
        totalPrice = result.toFixed(2)
    }
    
    const cartWidget = document.createElement('div');
    cartWidget.classList.add('cart__widget');

    const cartLink = document.createElement('a');
    cartLink.href = '#cart'

    const cartIcon = document.createElement('div');
    cartIcon.classList.add('cart__icon');
    cartIcon.append(cartLink)

    const cartTotal = document.createElement('div');
    cartTotal.classList.add('total');
    cartTotal.innerText = totalPrice

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart__items');
    cartItems.innerText = countItems
    cartIcon.append(cartItems)
    cartWidget.append(cartIcon, cartTotal);

    return cartWidget;
}

export {cartWidget}