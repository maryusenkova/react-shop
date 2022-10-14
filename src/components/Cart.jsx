import { useContext } from 'react';
import { ShopContext } from '../context';

export function Cart() {
    const { order, handleCartShow = Function.prototype } =
        useContext(ShopContext);

    const quantity = order.length;

    return (
        <div
            className="cart light-blue lighten-2 white-text"
            onClick={handleCartShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}
