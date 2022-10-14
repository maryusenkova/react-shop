import { CartItem } from './CartItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export function CartList(props) {
    const { order = [], handleCartShow = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection cart-list">
            <li className="collection-item active light-blue lighten-2">
                Корзина
            </li>
            {order.length ? (
                order.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active light-blue lighten-2">
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item light-blue lighten-2">
                <button className="btn btn-small light-blue darken-2">
                    Оформить
                </button>
            </li>
            <i className="material-icons cart-close" onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
}
