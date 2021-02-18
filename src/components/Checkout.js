import React from 'react';
import { useStateValue } from '../StateProvider';
import './css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


const Checkout = () => {
    const [{ basket,user }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://m.media-amazon.com/images/I/51RaednKxSL._SR1242,250_.jpg"
                    alt="" />
                
                <div >
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your
                    Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>

           

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
