import { RssFeed } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './css/Subtotal.css';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer';
import {useHistory} from 'react-router-dom';

const Subtotal = () => {
    const history = useHistory();
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

            <button onClick={e => history.push('/payment')}>Checkout</button>
        </div>
    );
}

export default Subtotal;
