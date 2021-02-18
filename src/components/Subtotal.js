import { RssFeed } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './css/Subtotal.css';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"Rs."}
            />

            <button>Checkout</button>
        </div>
    );
}

export default Subtotal;
