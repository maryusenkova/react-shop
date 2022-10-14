import { ShopContext } from '../context';
import { useContext } from 'react';

export function GoodsItem(props) {
    const { id, name, description, price, full_background } = props;

    const { addToCart } = useContext(ShopContext);

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn light-blue lighten-1"
                    onClick={() => addToCart({ id, name, price })}
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: '1.8rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}
