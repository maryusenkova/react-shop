import { useContext } from 'react';
import { ShopContext } from '../context';

export function CartItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromCart, incrementQuantity, decrementQuantity } =
        useContext(ShopContext);

    return (
        <li className="collection-item">
            {name} x{' '}
            <button
                className="btn light-blue lighten-2"
                onClick={() => decrementQuantity(id)}
            >
                -
            </button>{' '}
            {quantity}{' '}
            <button
                className="btn light-blue lighten-2"
                onClick={() => incrementQuantity(id)}
            >
                +
            </button>{' '}
            = {price * quantity} руб.
            <span
                className="secondary-content"
                onClick={() => removeFromCart(id)}
            >
                <i className="material-icons cart-delete">close</i>
            </span>
        </li>
    );
}
