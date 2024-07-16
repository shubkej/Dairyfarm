import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Placeorder.css'

const Placeholder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='main-div'>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>

          <div className="multi-fileds">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='last name' />
          </div>

          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Street' />

          <div className="multi-fileds">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>

          <div className="multi-fileds">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />

        </div>

       
      </form>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹{getTotalCartAmount() == 0 ? 0 : 2}</p>

            </div>
            <hr />

            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>

            <button>PROCEED TO PAYMENT</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
